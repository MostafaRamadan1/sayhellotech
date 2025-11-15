import { IService } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Image from 'next/image';
import gradient1 from '@public/images/gradient/gradient-1.png';
import gradient2 from '@public/images/gradient/gradient-2.png';
import gradient3 from '@public/images/gradient/gradient-3.png';
import gradient5 from '@public/images/gradient/gradient-5.png';
import gradient22 from '@public/images/gradient/gradient-22.png';
import gradient28 from '@public/images/gradient/gradient-28.png';
import ServicesBanner from '@/components/services/ServicesBanner';
import Feature from '@/components/services/Feature';

const ServicesHeader = () => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="text-center  ">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-5">Our Services</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[950px] mx-auto text-center">
                Empowering teams. Elevating businesses. <br className="hidden md:block" />Built by <span
                className="text-primary-500">people
                who care.</span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="max-w-[700px] mx-auto text-center">
                At SayHelloTech, we bring together talented developers and
                forward-thinking companies.
                Every service we offer is designed to help you grow faster, build smarter, and focus on what truly
                matters — your vision.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;
