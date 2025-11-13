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

const Services = () => {
  // Import service files individually
  const service1 = getMarkDownContent('src/data/available-services/', 'web-development');
  const service2 = getMarkDownContent('src/data/available-services/', 'mobile-development');
  const service3 = getMarkDownContent('src/data/available-services/', 'devops-cloud');
  const service4 = getMarkDownContent('src/data/available-services/', 'qa-testing');
  const service5 = getMarkDownContent('src/data/available-services/', 'ui-ux-design');
  const service6 = getMarkDownContent('src/data/available-services/', 'machine-learning-and-ai');

  const servicesData: IService[] = [
    {
      ...(service1.data as IService),
      slug: 'automated-background-replacement',
      content: service1.content,
    },
    {
      ...(service2.data as IService),
      slug: 'batch-image-processing',
      content: service2.content,
    },
    {
      ...(service3.data as IService),
      slug: 'big-data-consulting',
      content: service3.content,
    },
    {
      ...(service4.data as IService),
      slug: 'business-analysis',
      content: service4.content,
    },
    {
      ...(service5.data as IService),
      slug: 'machine-learning-and-ai',
      content: service5.content,
    },
    {
      ...(service6.data as IService),
      slug: 'cloud-integration',
      content: service6.content,
    },
  ];

  // const gradientLayers = [gradient1, gradient3, gradient5, gradient28, gradient2, gradient22];
  const gradientLayers = [gradient22];

  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] pt-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green-v2">Our Services</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="max-w-[950px] mx-auto text-center">
                Empowering teams. Elevating businesses. <br className="hidden md:block" />Built by <span
                className="text-primary-500">people
                who care.</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[700px] mx-auto text-center">
                At SayHelloTech, we bring together talented developers and
                forward-thinking companies.
                Every service we offer is designed to help you grow faster, build smarter, and focus on what truly
                matters — your vision.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
          {servicesData.map((service, index) => (
            <RevealAnimation key={'service-id-' + index + 1} delay={0.5 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-4 ">
                <div
                  className="group relative z-10 grid items-center justify-center space-y-6 overflow-hidden rounded-[20px] bg-background-3
                  px-6 py-8 text-center transition-all duration-700 ease-in-out hover:translate-y-[-10px]
                  dark:bg-background-7">
                  {/* bg gradient */}
                  <figure
                    className="absolute inset-0 -z-10 -top-[150%] -right-[120%] rotate-[-78deg] select-none pointer-events-none
                    opacity-0 transition-all duration-1000 ease-in-out group-hover:opacity-50 dark:group-hover:opacity-100 group-hover:scale-110">
                    <Image
                      src={gradientLayers[index % gradientLayers.length]}
                      className="size-full object-cover"
                      alt={`gradient-${index % gradientLayers.length}`}
                    />
                  </figure>
                  <div className="flex items-center justify-center">
                    <span className={`${service.icon} text-[52px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5 line-clamp-1">{service.title}</h3>
                    <p className="max-w-[361px] mx-auto line-clamp-3">{service.description}</p>
                  </div>
                  <div>
                    <LinkButton
                      href={`/our-services/${service.slug}`}
                      className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                      Read more
                    </LinkButton>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
