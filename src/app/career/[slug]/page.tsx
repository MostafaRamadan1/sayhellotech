import CareerDetailsBody from '@/components/career/CareerDetailsBody';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';
import { Fragment } from 'react';
import FooterOne from '@/components/shared/footer/FooterOne';

export async function generateStaticParams() {
  const careers = getMarkDownData('src/data/career');
  return careers.map((career) => ({
    slug: career.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Apply Now - SayHelloTech',
};

const CareerDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">

        <CareerDetailsBody slug={slug} />
        {/*<CTAV1*/}
        {/*  className="dark:bg-background-5 bg-white"*/}
        {/*  badgeClass="!badge-yellow-v2"*/}
        {/*  badgeText="Get Started"*/}
        {/*  ctaHeading="Build a complete website using the assistance"*/}
        {/*  description="Start your free trial today and see your ideas come to life easily and creatively."*/}
        {/*  btnClass="hover:btn-secondary dark:hover:btn-accent"*/}
        {/*  ctaBtnText="Get started"*/}
        {/*/>*/}
      </main>
      <FooterOne />
    </Fragment>
  );
};

CareerDetails.displayName = 'CareerDetails';
export default CareerDetails;
