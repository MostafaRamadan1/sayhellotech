import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// SMTP Configuration Constants
const SMTP_HOST = 'satya.vivawebhost.com';
const SMTP_PORT = 465;
const SMTP_USER = 'hello@sayhellotech.com';
const SMTP_PASSWORD = 'UKjs30TlW3hq4';
const RECIPIENT_EMAIL = 'hello@sayhellotech.com';


// Helper function to create transporter
function createTransporter() {
  const smtpPort = parseInt(String(SMTP_PORT));
  const isSecurePort = smtpPort === 465;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: smtpPort,
    secure: isSecurePort, // true for 465 (SSL), false for 587 (TLS)
    requireTLS: !isSecurePort, // Require TLS for port 587
    connectionTimeout: 10000, // 10 seconds timeout
    greetingTimeout: 10000, // 10 seconds timeout
    socketTimeout: 10000, // 10 seconds timeout
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },

    // Ignore certificate errors (only for development/testing)
    tls: {
      rejectUnauthorized: false,
    },
  });
}

// GET endpoint to test SMTP connection
export async function GET() {
  try {
    console.log('=== Testing SMTP Connection ===');
    
    // Validate SMTP configuration
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
      console.error('❌ Missing SMTP configuration:', {
        SMTP_HOST: !!SMTP_HOST,
        SMTP_PORT: !!SMTP_PORT,
        SMTP_USER: !!SMTP_USER,
        SMTP_PASSWORD: !!SMTP_PASSWORD,
      });
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing SMTP configuration',
          details: {
            SMTP_HOST: !!SMTP_HOST,
            SMTP_PORT: !!SMTP_PORT,
            SMTP_USER: !!SMTP_USER,
            SMTP_PASSWORD: !!SMTP_PASSWORD,
          }
        },
        { status: 400 }
      );
    }

    console.log('SMTP Configuration:', {
      host: SMTP_HOST,
      port: SMTP_PORT,
      user: SMTP_USER,
      secure: parseInt(String(SMTP_PORT)) === 465,
    });

    const transporter = createTransporter();
    
    console.log('Attempting to verify SMTP connection...');
    
    // Test the connection without sending an email
    await transporter.verify();
    
    console.log('✅ SMTP Connection Test: SUCCESS');
    console.log('Connection verified successfully!');
    
    return NextResponse.json(
      { 
        success: true,
        message: 'SMTP connection test successful!',
        config: {
          host: SMTP_HOST,
          port: SMTP_PORT,
          user: SMTP_USER,
          secure: parseInt(String(SMTP_PORT)) === 465,
        }
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ SMTP Connection Test: FAILED');
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      address: error.address,
      port: error.port,
      syscall: error.syscall,
      message: error.message,
    });
    
    let errorMessage = 'SMTP connection test failed.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'SMTP authentication failed. Please check your email credentials.';
      console.error('❌ Authentication failed - check username and password');
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT' || error.code === 'ESOCKET') {
      errorMessage = `Connection timeout. Try using port 587 instead of 465, or check your firewall/network settings.`;
      console.error(`❌ Connection timeout (${error.code}) - check port and firewall settings`);
    } else if (error.responseCode === 535) {
      errorMessage = 'SMTP authentication failed. Please check your email credentials.';
      console.error('❌ Authentication failed (535) - invalid credentials');
    } else {
      console.error('❌ Unexpected error:', error.message);
    }
    
    return NextResponse.json(
      { 
        success: false,
        error: errorMessage,
        details: {
          code: error.code,
          message: error.message,
          address: error.address,
          port: error.port,
        }
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log("Received contact form submission");
    const body = await request.json();
    const { fullname, email, number, subject, message } = body;

    // Validate required fields
    if (!fullname || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate SMTP configuration
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
      console.error('Missing SMTP configuration:', {
        SMTP_HOST: !!SMTP_HOST,
        SMTP_PORT: !!SMTP_PORT,
        SMTP_USER: !!SMTP_USER,
        SMTP_PASSWORD: !!SMTP_PASSWORD,
      });
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create transporter using helper function
    const transporter = createTransporter();

    // Email content
    // Use user's email as "from" address (may cause issues with some SMTP servers)
    const mailOptions = {
      from: SMTP_USER, // User's email from the form
      replyTo: email, // This allows replies to go to the user's email
      to: RECIPIENT_EMAIL,
      subject: `Customer request : ${subject}`,
        html: `
          <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; color: #333; background-color: #f9fafb; padding: 24px;">
            <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding: 24px;">
              <h2 style="color: #0078ff; margin-bottom: 8px;">👋 New Request from ${fullname}</h2>
              <p style="font-size: 15px; color: #555;">Someone just said hello on your website — here are the details:</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;">
              <p><strong>👤 Name:</strong> ${fullname}</p>
              <p><strong>✉️ Email:</strong> <a href="mailto:${email}" style="color: #0078ff;">${email}</a></p>
              ${number ? `<p><strong>📞 Phone:</strong> ${number}</p>` : ''}
              <p><strong>💡 Subject:</strong> ${subject}</p>
              <p style="margin-top: 16px;"><strong>🗒️ Message:</strong></p>
              <div style="background: #f3f4f6; border-radius: 8px; padding: 12px; white-space: pre-line; line-height: 1.5;">
                ${message.replace(/\n/g, '<br>')}
              </div>
              <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
              <p style="font-size: 13px; color: #888;">This message was sent via the <strong>SayHelloTech Contact Form</strong>.  
              You can reply directly to this email to respond.</p>
            </div>
          </div>
        `,
        text: `
        👋 New Request from ${fullname}
        
        Someone just said hello on your website!
        
        Name: ${fullname}
        Email: ${email}
        ${number ? `Phone: ${number}` : ''}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        Sent via SayHelloTech Contact Form.
        You can reply directly to this email to respond.
        `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      address: error.address,
      port: error.port,
      syscall: error.syscall,
    });
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'SMTP authentication failed. Please check your email credentials.';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT' || error.code === 'ESOCKET') {
      errorMessage = `Connection timeout. Please try using port 587 instead of 465, or check your firewall/network settings. Error: ${error.code}`;
    } else if (error.responseCode === 535) {
      errorMessage = 'SMTP authentication failed. Please check your email credentials.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Connection timeout. The SMTP server is not responding. Try port 587 instead of 465.';
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

