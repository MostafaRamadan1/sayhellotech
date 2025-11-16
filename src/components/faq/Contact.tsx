import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const Contact = () => {
  return (
    <section className="pb-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="main-w-[850px] md:w-full mx-auto text-center space-y-5">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">Contact</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.3}>
                <h2 id="contact-heading">Still have questions?</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="max-w-[442px] sm:w-full mx-auto">
                  If your question isn&apos;t listed here, feel free to contact us or start a live chat with our team.
                  We&apos;re happy to help!
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-lg hover:btn-secondary dark:hover:btn-accent btn-primary px-20 mt-5">
                    Get help
                  </LinkButton>
                </div>
              </RevealAnimation>

            </div>
          </div>
          {/* form */}

        </div>
      </div>
    </section>
  );
};

export default Contact;
