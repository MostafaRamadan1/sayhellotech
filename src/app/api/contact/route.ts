import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// SMTP Configuration Constants
const SMTP_HOST = 'satya.vivawebhost.com';
const SMTP_PORT = 465;
const SMTP_USER = 'hello@sayhellotech.com';
const SMTP_PASSWORD = 'UKjs30TlW3hq4';
const SMTP_FROM = 'support@sayhellotech.com';
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
    // Use authenticated SMTP user as "from" address, but include user's email in reply-to
    const mailOptions = {
      from: SMTP_FROM || SMTP_USER,
      replyTo: email, // This allows replies to go to the user's email
      to: RECIPIENT_EMAIL,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${number ? `<p><strong>Phone Number:</strong> ${number}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${fullname}
        Email: ${email}
        ${number ? `Phone Number: ${number}` : ''}
        Subject: ${subject}
        
        Message:
        ${message}
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

