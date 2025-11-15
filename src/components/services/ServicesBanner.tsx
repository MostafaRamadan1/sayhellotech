import serviceBanner from '@public/images/services/service-banner.webp';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const ServicesBanner = ({ className }: { className?: string; }) => {
  {
    return (
      <section className={className}>
        <div className="main-container">
          <div className="flex flex-col lg:flex-row items-center lg:gap-[100px] gap-y-14">
            <div className="flex-1 space-y-14 max-w-[540px] mx-auto lg:mx-0 lg:max-w-full text-center lg:text-left">
              <div className="space-y-3">
                <RevealAnimation delay={0.1}>
                  <h2>Built for your business. <span className="text-primary-500">Adapted </span> to your workflow.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p>
                    SayHelloTech is designed to serve a wide range of teams and industries. Whether you’re managing
                    data,
                    scaling operations, optimizing code base, or streamlining customer experiences — SayHelloTech is the
                    the right choice that grows with you.
                  </p>
                </RevealAnimation>
              </div>
              {/*<RevealAnimation delay={0.3} instant>*/}
              {/*  <div>*/}
              {/*    <LinkButton*/}
              {/*      href="#services"*/}
              {/*      className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent">*/}
              {/*      Explore the service below*/}
              {/*    </LinkButton>*/}
              {/*  </div>*/}
              {/*</RevealAnimation>*/}
            </div>
            <div className="flex-1">
              <RevealAnimation delay={0.3} instant>
                <figure className="opacity-0 max-w-[596px] w-full rounded-[20px] overflow-hidden">
                  <Image src={serviceBanner} className="w-full h-full object-cover" alt="learn banner" />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ServicesBanner;
