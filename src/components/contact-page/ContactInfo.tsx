'use client';

import gradient17 from '@public/images/gradient/gradient-17.png';
import gradient22 from '@public/images/gradient/gradient-22.png';
import gradient6 from '@public/images/gradient/gradient-6.png';
import homeIcon from '@public/images/icons/home.svg';
import mailIcon from '@public/images/icons/mail-open.svg';
import phoneIcon from '@public/images/icons/phone-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const contactInfoItems = [
    {
        id: 1,
        icon: homeIcon,
        title: 'Our Address',
        content: '5 Degla Compound, next to Technology Park, Maadi, Cairo 11728, Egypt',
        gradient: gradient22,
        gradientClass: 'top-[-187px] left-[174px] -rotate-[78deg]',
    },
    {
        id: 2,
        icon: mailIcon,
        title: 'Email Us',
        content: 'hello@sayhellotech.com',
        link: 'mailto:hello@sayhellotech.com',
        gradient: gradient17,
        gradientClass: 'top-[-206px] left-[-36px] rotate-[62deg]',
    },
    {
        id: 3,
        icon: phoneIcon,
        title: 'Call Us',
        content: '+2 (01)14 1325 993',
        link: 'tel:+201141325993',
        gradient: gradient6,
        gradientClass: 'top-[-184px] left-[-185px]',
    },
];

const ContactInfo = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        const formData = new FormData(e.currentTarget);
        const data = {
            fullname: formData.get('fullname') as string,
            email: formData.get('email') as string,
            number: formData.get('number') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Parse response once
            let result;
            try {
                result = await response.json();
            } catch (parseError) {
                // If JSON parsing fails, handle based on response status
                if (response.ok) {
                    // Response is OK but JSON parsing failed - assume success
                    console.warn('Response OK but JSON parsing failed:', parseError);
                    setSubmitStatus({
                        type: 'success',
                        message: 'Thank you! Your message has been sent successfully.',
                    });
                    e.currentTarget.reset();
                    return;
                } else {
                    // Response is not OK and JSON parsing failed
                    setSubmitStatus({
                        type: 'error',
                        message: response.statusText || 'Failed to send message. Please try again.',
                    });
                    return;
                }
            }

            // Check response status after parsing
            if (response.ok) {
                // Success case
                setSubmitStatus({
                    type: 'success',
                    message: result.message || 'Thank you! Your message has been sent successfully.',
                });
                // Reset form
                e.currentTarget.reset();
            } else {
                // Error case
                setSubmitStatus({
                    type: 'error',
                    message: result.error || 'Failed to send message. Please try again.',
                });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'An error occurred. Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
    <section className="pt-50 pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]" aria-label="Contact Information and Form">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="max-w-[680px] mx-auto text-center space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Reach out to our support team for help.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Whether you have a question, need technical assistance, or just want some guidance, our support team is
                here to help. We&apos;re available around the clock to provide quick and friendly support.
              </p>
            </RevealAnimation>
          </div>
          <div className="flex lg:items-start flex-col justify-center items-center gap-10 lg:flex-row lg:gap-8 xl:gap-[70px]">
            {/* contact info cards  */}
            <div className="flex flex-col gap-8 md:flex-row lg:flex-col">
              {contactInfoItems.map((item) => (
                <RevealAnimation key={item.id} delay={0.4}>
                  <div className="bg-secondary dark:bg-background-6 rounded-[20px] p-11 space-y-6 w-full md:max-w-[371px] text-center relative overflow-hidden">
                    {/* bg overlay  */}
                    <figure
                      className={`absolute select-none pointer-events-none size-[350px] overflow-hidden ${item.gradientClass}`}>
                      <Image src={item.gradient} alt="Decorative gradient overlay" className="size-full object-cover" />
                    </figure>
                    <figure className="size-10 overflow-hidden mx-auto">
                      <Image src={item.icon} alt={`${item.title} icon`} className="size-full object-cover" />
                    </figure>
                    <div className="space-y-2.5">
                      <p className="text-heading-6 text-accent">{item.title}</p>
                      {item.link ? (
                        <p className="text-accent/60">
                          <Link href={item.link}>{item.content}</Link>
                        </p>
                      ) : (
                        <p className="text-accent/60">{item.content}</p>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            {/* contact form  */}
            <RevealAnimation delay={0.3}>
              <section className="max-w-[847px] w-full mx-auto bg-white dark:bg-background-6 rounded-4xl p-6 md:p-8 lg:p-11">
                {/* Status messages */}
                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
                        : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
                    }`}>
                    <p className="text-tagline-2">{submitStatus.message}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-8">
                {/* name and phone number  */}
                <div className="flex items-center flex-col md:flex-row gap-8 justify-between">
                  {/*  name */}
                  <div className="space-y-2 lg:max-w-[364px] w-full">
                    <label
                      htmlFor="fullname"
                      className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                      Your name*
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Enter your name"
                      required={true}
                      autoComplete="name"
                      className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                    />
                  </div>
                  {/* number */}
                  <div className="space-y-2 max-w-[364px] w-full">
                    <label
                      htmlFor="number"
                      className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                      Your number
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder="Enter your number"
                      required={true}
                      autoComplete="tel"
                      className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                    />
                  </div>
                </div>
                {/* email  */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                    Email address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required={true}
                    autoComplete="email"
                    className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                  />
                </div>
                {/* subject  */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter your subject"
                    required={true}
                    className="w-full px-[18px] dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 py-3 h-[48px] xl:h-[41px] rounded-full dark:bg-background-6 border border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                  />
                </div>
                {/* message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                    Write message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Enter your messages"
                    required={true}
                    className="w-full px-[18px] py-3 rounded-xl border dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent placeholder:font-normal font-normal"
                    defaultValue={''}
                  />
                </div>
                {/* terms checkbox */}
                <fieldset className="flex items-center gap-2 mb-4">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="sr-only peer" required={true} />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                  </label>
                  <label
                    htmlFor="terms"
                    className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60">
                    I agree with the
                    <Link href="#" className="text-primary-500 underline text-tagline-3">
                      {' '}
                      terms and conditions
                    </Link>
                  </label>
                </fieldset>
                {/* submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-md btn-secondary w-full hover:btn-primary dark:btn-accent before:content-none first-letter:uppercase disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
              </section>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
