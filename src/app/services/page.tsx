import Services from '@/components/services/Services';

import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';
import Feature from '@/components/services/Feature';
import Banner from '@/components/tutorial/Banner';
import ServicesHeader from '@/components/services/ServicesHeader';
import ServicesBanner from '@/components/services/ServicesBanner';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Services 01 - NextSaaS',
};

const OurServices01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-background-3 dark:!bg-background-7"
      />
      <main className="bg-background-1 dark:bg-background-6 pt-[100px]">
        <ServicesHeader />
        <ServicesBanner />
        <Services />
        <Feature className="pb-[100px] " />

      </main>
      <FooterOne />
    </Fragment>
  );
};

export default OurServices01;
