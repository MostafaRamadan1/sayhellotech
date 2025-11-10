import CareerContent from '@/components/career/CareerContent';
import Positions from '@/components/career/Positions';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';
import FooterOne from '@/components/shared/footer/FooterOne';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Career - NextSaaS',
};

const Career = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-5 pt-[100]">
        {/*<PageHero title="Careers" heading="Careers" link="/career" className="bg-background-3 dark:bg-background-5" />*/}
        <CareerContent />
        <Positions />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default Career;
