import vision1Img from '@public/images/about/vision-1.webp';
import vision2Img from '@public/images/about/vision-3.webp';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const VisionStatement = () => {
  return (


    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] pt-[100px]">
      <div className="main-container space-y-12 md:space-y-16 lg:space-y-[100px]">
        <div className="space-y-3 text-center max-w-[780px] mx-auto">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Passion meets purpose</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="font-medium">Built for progress. designed for possibility.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p>
              At SayHelloTech, we believe great technology starts with great people.
              Our story began with a simple idea — what if hiring top developers was as seamless as working with them?

              Today, we connect ambitious companies with talented engineers, designers, and tech experts who bring ideas
              to life.
              From startups to global enterprises, we help teams scale faster, work smarter, and focus on what truly
              matters — building products that make a difference.
            </p>
          </RevealAnimation>
        </div>
        <article className="flex flex-col md:flex-row gap-8">
          <RevealAnimation delay={0.5} instant={true}>
            <figure className="rounded-[20px] overflow-hidden max-w-full md:max-w-[630px]">
              <Image src={vision1Img} className="w-full h-full object-cover" alt="vision-1" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.6} instant={true}>
            <figure className="rounded-[20px] overflow-hidden max-w-full md:max-w-[630px]">
              <Image src={vision2Img} className="w-full h-full object-cover" alt="vision-2" />
            </figure>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default VisionStatement;
