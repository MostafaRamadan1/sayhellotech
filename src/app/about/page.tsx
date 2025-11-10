import OurMission from '@/components/aboutpage/OurMission';
import VisionStatement from '@/components/aboutpage/VisionStatement';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import FinanceIntro from '@/components/aboutpage/FinanceIntro';
import Reviews from '@/components/aboutpage/Reviews';
import CTAV2 from '@/components/shared/cta/CTAV2';
import FooterOne from '@/components/shared/footer/FooterOne';


export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AboutPage - SayHelloTech',
};

const AboutUsPage = () => {
  return (
    <>
      <NavbarOne
        megaMenuColor="!bg-background-3 dark:!bg-background-7"
        className="dark:border bg-accent/60 dark:border-stroke-7 dark:bg-background-7 backdrop-blur-[25px]"
        btnClassName="btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark"
      />
      <main className="bg-white dark:bg-background-8 pt-[100]">
        {/*<PageHero title="About us" heading="About us" link="/about" />*/}
        <VisionStatement />
        <OurMission />
        <FinanceIntro />
        <Reviews />
        <CTAV2
          ctaHeading="Say hello to a better way to grow your business."
          ctaDescription="Ready to take your business to the next level? Let’s start the conversation — say hello today. 👋"
          ctaBtnText="Just Say Hello Tech!"
          ctaCheckListData={[]}
        />
      </main>
      <FooterOne />
    </>
  );
};
AboutUsPage.displayName = 'AboutPage';
export default AboutUsPage;
