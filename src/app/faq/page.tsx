import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';
import FooterOne from '@/components/shared/footer/FooterOne';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'FAQ - NextSaaS',
};

const FAQ = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <FaqTab />
        <Contact />

      </main>
      <FooterOne />
    </Fragment>
  );
};

export default FAQ;
