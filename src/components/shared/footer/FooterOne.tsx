import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import linkedin from '@public/images/icons/linkedin.svg';
import darkLogo from '@public/images/shared/dark-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';
import FooterLeftGradient from './FooterLeftGradient';
import FooterRightGradient from './FooterRightGradient';

interface FooterOneProps {
  className?: string;
  defaultTheme?: 'light' | 'dark';
}

// const FooterFour = ({ className }: { className?: string }) => {
const FooterOne = ({ className, defaultTheme }: FooterOneProps) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative overflow-hidden', className)}>
      {/* <!-- right gradient --> */}
      <FooterRightGradient />

      {/* <!-- left gradient --> */}
      <FooterLeftGradient />
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="max-w-[306px]">
                <figure>
                  <Image src={darkLogo} alt="SayHelloTech Logo" />
                </figure>
                <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                  Because Great Code Starts with a Hello
                </p>
                <div className="flex items-center gap-3">
                  <Link target="_blank" href="https://www.linkedin.com/company/sayhellotech/"
                        className="footer-social-link">
                    <span className="sr-only">LinkedIn</span>
                    <Image className="size-6" src={linkedin} alt="LinkedIn" />
                  </Link>
                  {/*<div className="bg-stroke-1/20 h-6 w-px"></div>*/}
                  {/*<Link target="_blank" href="https://www.youtube.com" className="footer-social-link">*/}
                  {/*  <span className="sr-only">Youtube</span>*/}
                  {/*  <Image className="size-6" src={youtube} alt="Youtube" />*/}
                  {/*</Link>*/}
                </div>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.4}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Company</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <Link href="/services" className="footer-link">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="footer-link">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/career" className="footer-link">
                        Career
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.5}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Support</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <Link href="/faq" className="footer-link">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="footer-link">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-4">
              <RevealAnimation delay={0.6}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">Legal Policies</p>
                  <ul className="space-y-3 sm:space-y-5">
                    <li>
                      <Link href="/gdpr" className="footer-link">
                        GDPR Compliance
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="relative pt-[26px] pb-[100px] text-center">
          <FooterDivider />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-primary-50 font-normal">
              Copyright &copy;SayHelloTech – Because Great Product Starts with a Hello
            </p>
          </RevealAnimation>
        </div>
      </div>
      <ThemeToggle defaultTheme={defaultTheme} />
    </footer>
  );
};

export default FooterOne;
