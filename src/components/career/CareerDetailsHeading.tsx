import RevealAnimation from '../animation/RevealAnimation';

const CareerDetailsHeading = () => {
  return (
    <div className="text-center space-y-3 mb-[70px] pt-[200px]">
      <RevealAnimation delay={0.2}>
        <span className="badge badge-green mb-5 ">Apply Now, what you are waiting for!</span>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <h2>
          We&apos;re building the future of tech industry— <br className="hidden md:block" />
          come build It with us.
        </h2>
      </RevealAnimation>
    </div>
  )
};
CareerDetailsHeading.displayName = 'CareerDetailsHeading';
export default CareerDetailsHeading;
