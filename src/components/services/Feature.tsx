import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import aboutBg from '@public/images/home-page-2/about-bg.png';
import workBg from '@public/images/home-page-2/work-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';


interface FeatureItem {
  id: string;
  text: string;
}

const Feature = ({ className, btnClassName }: { className?: string; btnClassName?: string }) => {
  const features: FeatureItem[] = [
    {
      id: 'growing-startups',
      text: 'Growing startups and bold founders are scaling faster with SayHelloTech.',
    },
    {
      id: 'enterprise-teams',
      text: 'Enterprise teams rely on dedicated talent to power lasting innovation.',
    },
    {
      id: 'tech-agencies',
      text: 'Agencies and partners expand their reach through our skilled developers.',
    },
    {
      id: 'product-teams',
      text: 'Product and engineering teams build smarter with our seamless support.',
    },
  ];

  return (
    <section className={className}>
      <RevealAnimation delay={0.2}>
        <div className="main-container pb-[100px] ">

          <div className="max-w-[680px] mx-auto text-center pb-[50px]">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-green mb-5">Redefining exceptional service.</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Built for teams that <span className="text-primary-500">never stop</span> building.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                We’re proud to support the dreamers, builders, and innovators shaping tomorrow’s tech — with dedicated
                talent that feels like part of your team.
              </p>
            </RevealAnimation>
          </div>

          <div className="relative z-10 ">
            <div
              className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[20px] overflow-hidden bg-background-9">
              <Image src={workBg} alt="about bg" className="w-full h-full object-cover" />
            </div>

            <div className="py-14 lg:px-11 px-6 grid max-lg:grid-cols-1 grid-cols-2 max-sm:gap-10 gap-5">
              <div className="max-w-[500px]">
                <h2 className="text-accent mb-8 sm:text-heading-5 text-heading-6">
                  We appreciate our valued clients and strive to provide them with the best service possible.
                </h2>
                <LinkButton href="/contact-us" className={cn('btn btn-primary', btnClassName)}>
                  Get started
                </LinkButton>
              </div>
              <div>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-2">
                      <span
                        className="size-5 shrink-0 bg-accent/17 dark:bg-accent/10 rounded-full flex items-center justify-center">
                        <CheckIcon className=" dark:fill-accent" />
                      </span>
                      <span className="text-accent">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Feature;
