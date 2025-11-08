import ContactInfo from '@/components/contact-page/ContactInfo';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import FooterOne from '@/components/shared/footer/FooterOne';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us',
};

const ContactUs = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <ContactInfo />
      </main>
      <FooterOne className='dark:!bg-background-8"' />
    </>
  );
};
ContactUs.displayName = 'AboutPage03';
export default ContactUs;
