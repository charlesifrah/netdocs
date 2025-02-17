import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { Linkedin, Youtube, Github } from '@styled-icons/boxicons-logos';
// Assuming you have an appropriate icon for Twitter or similar, replace XIcon if needed.
import { XIcon } from '@site/src/icons';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ThemedImage from '@theme/ThemedImage';

// Update these arrays to reflect Hubble Network's offerings and pages.
const products = [
  {
    name: 'Satellite Communication',
    href: 'https://hubble.network/satellite-sdk',
  },
  {
    name: 'BLE Connectivity',
    href: 'https://hubble.network/ble-sdk',
  },
  {
    name: 'Network Management',
    href: 'https://hubble.network/network-management',
  },
  {
    name: 'Pricing',
    href: 'https://hubble.network/pricing',
  },
  {
    name: 'Features',
    isAccordion: true,
    content: [
      {
        name: 'Global Coverage',
        href: 'https://hubble.network/features/global-coverage',
      },
      {
        name: 'Low Latency',
        href: 'https://hubble.network/features/low-latency',
      },
      {
        name: 'Seamless Integration',
        href: 'https://hubble.network/features/integration',
      },
      {
        name: 'Security',
        href: 'https://hubble.network/features/security',
      },
    ],
  },
];

const developers = [
  {
    name: 'Developer Portal',
    href: 'https://developers.hubble.network',
  },
  {
    name: 'Documentation',
    href: 'https://docs.hubble.network',
  },
  {
    name: 'Showcase',
    href: 'https://hubble.network/showcase',
  },
  {
    name: 'API Reference',
    href: '/api',
  },
  {
    name: 'Guides',
    href: '/guides',
  },
];

const usecases = [
  { name: 'IoT', href: 'https://hubble.network/use-cases/iot' },
  { name: 'Telecommunications', href: 'https://hubble.network/use-cases/telecom' },
  { name: 'Remote Monitoring', href: 'https://hubble.network/use-cases/remote-monitoring' },
  { name: 'Logistics', href: 'https://hubble.network/use-cases/logistics' },
];

const company = [
  { name: 'About Us', href: 'https://hubble.network/about' },
  { name: 'Customers', href: 'https://hubble.network/customers' },
  { name: 'Blog', href: 'https://hubble.network/blog' },
  { name: 'Careers', href: 'https://hubble.network/careers' },
  { name: 'Contact Us', href: 'https://hubble.network/contact' },
  { name: 'FAQ', href: '/faq' },
];

const comparisons = [
  { name: 'Hubble vs Competitor A', href: 'https://hubble.network/compare/competitor-a' },
  { name: 'Hubble vs Competitor B', href: 'https://hubble.network/compare/competitor-b' },
  {
    name: 'View More',
    isAccordion: true,
    content: [
      { name: 'Hubble vs Competitor C', href: 'https://hubble.network/compare/competitor-c' },
      { name: 'Hubble vs Competitor D', href: 'https://hubble.network/compare/competitor-d' },
      // Add more comparisons as needed.
    ],
  },
];

function Safety({ className }) {
  return (
    <div
      className={clsx(
        'flex max-w-[418px] flex-row overflow-clip rounded-2xl bg-white dark:bg-[#474747] sm:flex-col sm:pr-0 sm:pb-8 lg:flex-row lg:pr-16 lg:pb-0',
        className
      )}
    >
      <div className="flex flex-1 place-items-center justify-center rounded-2xl bg-white px-4 py-6 font-jakarta font-bold text-gray-500 dark:bg-[#474747] dark:text-[#fff]">
        Your Security,
        <br />
        Our Priority.
      </div>
      <div className="flex flex-1 items-center justify-around px-6">
        <img src="/img/soc-compliant-1.png" alt="SOC Compliant" />
        <img src="/img/vector.png" alt="HIPAA Compliant" />
        <img style={{ width: '62px' }} src="/img/gdpr_docs.png" alt="GDPR Compliant" />
      </div>
    </div>
  );
}

function Status({ className }) {
  const [status, setStatus] = useState({
    indicator: 'none',
    description: 'All Systems Operational',
  });

  useEffect(() => {
    if (typeof StatusPage !== 'undefined') {
      // eslint-disable-next-line no-undef
      var sp = new StatusPage.page({ page: 'wjlxrzb5h09l' });
      sp.status({
        success: function (data) {
          setStatus({
            indicator: data.status.indicator,
            description: data.status.description,
          });
        },
      });
    }
  }, []);

  return (
    <Link
      href="https://status.hubble.network"
      className={clsx(
        'flex items-center gap-2 rounded-lg border border-transparent p-1 px-2 font-jakarta font-semibold text-gray-500 transition-colors hover:border-gray-400 hover:bg-white hover:no-underline dark:hover:bg-[#474747]',
        className
      )}
      target="_blank"
    >
      <div
        className={clsx(
          'h-4 w-4 rounded-full',
          status.indicator === 'none' ? 'bg-[#2DB002]' : 'bg-yellow-500'
        )}
      ></div>
      <div>{status.description}</div>
    </Link>
  );
}

function Links({ name, links, isAccordion }) {
  // To control accordion in footer
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (href) => {
    setActiveAccordion((prevAccordion) => (prevAccordion === href ? null : href));
  };

  return (
    <div>
      <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400 dark:text-[#fff]">
        {name}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map(({ name, href, isAccordion, content }) => (
          <Link
            href={href}
            className="text-base text-gray-700 hover:text-primary hover:no-underline dark:text-[#f9f9f9]"
            onClick={() => (isAccordion ? toggleAccordion(href) : null)}
          >
            {name}
            {isAccordion && activeAccordion === href && (
              <ul style={{ paddingLeft: '1rem', listStyle: 'unset' }}>
                {content.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-700 hover:text-primary hover:no-underline dark:text-[#f9f9f9]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FF] dark:bg-[#191919]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <ThemedImage
            alt="Hubble Network"
            className="h-9 w-fit lg:h-12"
            sources={{
              light: '/logo/logo-light.png',
              dark: '/logo/logo-dark.png',
            }}
          />

          <Safety className="hidden lg:flex" />
          <BrowserOnly>
            {() => {
              return <Status className="lg:hidden" />;
            }}
          </BrowserOnly>
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="Product" links={products} />
          <Links name="Developers" links={developers} />
          <Links name="Usecases" links={usecases} />
          <Links name="Company" links={company} />
          <Links name="Compare" links={comparisons} />
        </div>

        <hr className="my-12 !bg-gray-300 dark:!bg-[#999]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <BrowserOnly>
            {() => {
              return <Status className="hidden lg:flex" />;
            }}
          </BrowserOnly>
          <Safety className="flex w-full max-w-full lg:hidden" />

          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <Link
              href="https://hubble.network/privacy-policy"
              className="text-inherit hover:text-black hover:underline dark:text-[#999] dark:hover:text-[#2160fd]"
            >
              Privacy Policy
            </Link>
            &bull;
            <Link
              href="https://hubble.network/terms-of-service"
              className="text-inherit hover:text-black hover:underline dark:text-[#999] dark:hover:text-[#2160fd]"
            >
              Terms of Service
            </Link>
            &bull;
            <Link
              href="https://hubble.network/website-terms-of-use"
              className="text-inherit hover:text-black hover:underline dark:text-[#999] dark:hover:text-[#2160fd]"
            >
              Website Terms of Use
            </Link>
            &bull;
            <span className="text-inherit dark:text-[#999]">
              &copy; {new Date().getFullYear()} Hubble Network. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/hubble-network"
              aria-label="Hubble Network GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/company/hubble-network"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link href="https://twitter.com/hubble_network" aria-label="Twitter">
              <XIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://youtube.com/channel/hubble_network"
              aria-label="Hubble Network YouTube Channel"
            >
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
