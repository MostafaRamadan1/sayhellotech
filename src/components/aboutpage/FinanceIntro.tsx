import { CheckIcon } from '@/icons';
import totalEarnImg from '@public/images/about/total-earn.webp';
import roundImageImg from '@public/images/about/hijab-girl.webp';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const principles = [
  {
    id: 1,
    label: 'Clarity Over Clutter',
    description: 'We keep things simple and meaningful because great tech should make life easier, not harder.',
  },
  {
    id: 2,
    label: 'People Before Features',
    description: 'Behind every line of code is a human story. We build with empathy, collaboration, and purpose.',
  },
  {
    id: 3,
    label: 'Security as a Standard',
    description: 'Trust is everything. We protect our clients, their users, and their data — always.',
  },
];

const FinanceIntro = () => {
  return (
    <section className="py-12 md:py-32 lg:py-40 xl:py-48 2xl:py-[200px] overflow-hidden">
      <div className="main-container flex flex-col-reverse lg:flex-row items-center gap-y-12 gap-x-24">
        <div className="md:flex-1 relative flex justify-start w-full lg:w-auto overflow-hidden">
          <RevealAnimation delay={0.2}>
            <Image src={roundImageImg} alt="Finance Hero" className="w-full max-w-[450px] h-auto" />
          </RevealAnimation>
          <RevealAnimation delay={0.3} direction="right" offset={90}>
            <div
              className="absolute text-heading-4 top-[49%] right-[15%] bg-ns-yellow p-4 rounded-2xl max-w-[219px] max-h-[70px] flex items-center justify-center">
              <div
                data-counter=""
                data-number={24545000}
                data-speed={1000}
                data-interval={180}
                data-rooms={8}
                data-height-space="2.3">
                #SayHelloTech
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="right" offset={100}>
            <figure
              className="rounded-xl max-w-[186px] w-full overflow-hidden shadow-10 absolute bottom-[20%] right-[20%] sm:block hidden">
              <Image src={totalEarnImg} alt="Finance Hero" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
        <div className="md:flex-1 flex flex-col lg:items-start lg:text-left">
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Values shape the way we think, build, and grow.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mb-6">
              They guide every decision we make — from how we design solutions to how we treat our people and partners.
            </p>
          </RevealAnimation>
          <ul className="mb-10 md:mb-14 space-y-2 md:space-y-3.5">
            {principles.map((item, idx) => (
              <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                <li className="text-tagline-1 flex font-medium items-start gap-3 dark:text-accent">
                  <span
                    className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center shrink-0 mt-1">
                    <CheckIcon />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium">{item.label}</span>
                    <p className="text-base text-body leading-relaxed">{item.description}</p>
                  </div>
                </li>

              </RevealAnimation>
            ))}
          </ul>
          <RevealAnimation delay={0.7}>
            <div>
              <LinkButton
                href="/signup-01"
                className="btn btn-primary hover:btn-black dark:btn-primary dark:hover:btn-white btn-xl block md:inline-block w-full md:w-auto mx-auto">
                Get started
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FinanceIntro;
