import RevealAnimation from '../animation/RevealAnimation';

interface ListItem {
  id: string;
  text: string;
}

interface DataCollectionItem {
  id: string;
  label: string;
  description: string;
}

interface ThirdPartyService {
  id: string;
  name: string;
  description: string;
}

interface DataRight {
  id: string;
  action: string;
  description: string;
}

const GdprContent = () => {
  // Purpose document items
  const purposeItems: ListItem[] = [
    { id: 'who-we-are', text: 'Who we are' },
    { id: 'data-types', text: 'What types of data do we collect?' },
    { id: 'why-collect', text: 'Why do we collect data?' },
    { id: 'retention', text: 'How long do we retain your data?' },
    { id: 'third-party', text: 'Third-party services we use' },
    { id: 'data-rights', text: 'Who we are Your rights over your data' },
    { id: 'manage-data', text: 'How you can manage, update, or delete your information' },
    { id: 'contact', text: 'How to contact us about your data' },
  ];

  // Updated items
  // const updatedItems: ListItem[] = [
  //   { id: 'terms', text: 'Terms and conditions' },
  //   { id: 'privacy', text: 'Privacy policy' },
  // ];

  // Data collection items
  const dataCollectionItems: DataCollectionItem[] = [
    {
      id: 'account-info',
      label: 'Account Information:',
      description: 'Your name, email address, phone number when you contact us.',
    },
    {
      id: 'browsing-behavior',
      label: 'Browsing Behavior:',
      description:
        'Pages you visit, products you view, time spent on the site, and interaction with our marketing campaigns.',
    },
  ];

  // Data collection purposes
  const dataPurposes: ListItem[] = [
    { id: 'account-management', text: 'To create and manage your SayHelloTech account' },
    { id: 'personalization', text: 'To improve your experience on our site through personalized content' },
    { id: 'analytics', text: 'To analyze site traffic and optimize marketing efforts' },
  ];

  // Third-party services
  const thirdPartyServices: ThirdPartyService[] = [
    {
      id: 'google-analytics',
      name: 'Google Analytics:',
      description: 'For traffic analysis and understanding user behavior.',
    },
  ];

  // Data rights
  const dataRights: DataRight[] = [
    { id: 'access', action: 'Access', description: 'your personal information' },
    { id: 'modify', action: 'Modify', description: 'your account information' },
    { id: 'delete', action: 'Request', description: 'the deletion of your data' },
    { id: 'withdraw', action: 'Withdraw', description: 'consent for processing personal information' },
    { id: 'download', action: 'Download', description: 'a copy of your stored data' },
  ];

  // Data management items
  const dataManagementItems: ListItem[] = [
    { id: 'update-profile', text: 'You can update your profile details anytime from your account dashboard.' },
    {
      id: 'data-deletion',
      text: 'To request a complete data deletion or data export, simply send an email to: support@SayHelloTech.com',
    },
  ];

  return (
    <section className="pt-[100px] pb-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* gdrp  */}
          <div className="text-center space-y-3 mb-[70px] mt-[100px]">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-green mb-5 ">Your data in safe hands</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>
                SayHelloTech and the general data protection regulation <span className="text-primary-500">(GDPR)</span>
              </h2>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3}>
            <div className="space-y-3">
              <p>
                The General Data Protection Regulation (GDPR) is a privacy regulation enacted by the European Union (EU)
                to strengthen the protection of individuals&apos; data. It became enforceable on May 25, 2018, and
                applies to any company that handles the data of EU citizens, no matter where the company is based.
                <br />
                <br />
                This page explains how SayHelloTech implements GDPR principles and ensures that your data is handled
                transparently, securely, and respectfully.
              </p>
            </div>
          </RevealAnimation>
          {/* purpose  */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-heading-4">Purpose of this document</h3>
                <p>
                  At SayHelloTech, we are fully committed to respecting your privacy. This page provides a clear
                  overview
                  of:
                </p>
              </div>
              <ul className="space-y-3">
                {purposeItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-start gap-2">
                    <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* what is gdpr  */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-3">
              <h3 className="text-heading-4">What is GDPR?</h3>
              <p>
                In simple terms, GDPR gives you greater control over your personal information. Service providers (like
                SayHelloTech) must be transparent about what data they collect, how they use it, and how they share it —
                and
                users must have full rights to access, modify, or delete their data.
                <br />
                <br />
                Although GDPR is an EU regulation, it affects any business that collects or processes the data of EU
                residents, including SayHelloTech.
              </p>
            </div>
          </RevealAnimation>
          {/* How SayHelloTech Implements GDPR */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-3">
              <h3 className="text-heading-4">How SayHelloTech Implements GDPR</h3>
              <p>
                SayHelloTech has always prioritized user data privacy, even before GDPR came into effect. Our core
                practices
                naturally align with GDPR principles, and we&apos;ve made further improvements to ensure full
                compliance.
              </p>
              {/*<div className="space-y-3">*/}
              {/*  <h4 className="text-tagline-1 text-secondary dark:text-accent">We have updated our:</h4>*/}
              {/*  <ul className="space-y-1">*/}
              {/*    {updatedItems.map((item) => (*/}
              {/*      <li key={item.id} className="flex items-center justify-start gap-2">*/}
              {/*        <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />*/}
              {/*        <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{item.text}</span>*/}
              {/*      </li>*/}
              {/*    ))}*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </div>
          </RevealAnimation>
          {/* Data we collect */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4">Data we collect</h3>
              <ul className="space-y-3">
                {dataCollectionItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-start gap-2">
                    <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />
                    <p>
                      <span className="text-secondary dark:text-accent">{item.label} </span>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Why we collect your data */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="data-purpose">
                Why we collect your data
              </h3>
              <ul className="space-y-3">
                {dataPurposes.map((purpose) => (
                  <li key={purpose.id} className="flex items-center justify-start gap-2">
                    <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">{purpose.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Third-Party services we use */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="third-party">
                Third-Party services we use
              </h3>
              <ul className="space-y-3">
                {thirdPartyServices.map((service) => (
                  <li key={service.id} className="flex items-center justify-start gap-2">
                    <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />
                    <p>
                      <span className="text-secondary dark:text-accent">{service.name} </span>
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/* Your data rights */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="data-rights">
                Your data rights
              </h3>
              <ul className="space-y-3">
                {dataRights.map((right) => (
                  <li key={right.id} className="flex items-center justify-start gap-2">
                    <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />
                    <p>
                      <span className="text-secondary dark:text-accent">{right.action}</span> {right.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
          {/*How to manage or delete your data*/}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3 className="text-heading-4" id="data-management">
                How to manage or delete your data
              </h3>
              <ul className="space-y-3">
                {dataManagementItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-start gap-2">
                    <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent" />
                    <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                      {item.id === 'data-deletion' ? (
                        <>
                          To request a complete data deletion or data export, simply send an email to:{' '}
                          <span className="text-secondary dark:text-accent">support@SayHelloTech.com</span>
                        </>
                      ) : (
                        item.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default GdprContent;
