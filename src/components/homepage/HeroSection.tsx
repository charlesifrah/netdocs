import React from 'react';
import Link from '@docusaurus/Link';
import {
  BluetoothFilled,
  ChatMultipleRegular,
  GlobeFilled,
  LiveRegular,
  MicRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Satellite Communication',
    link: '/guides/satellite/intro',
    icon: GlobeFilled, // Consider using an icon that better represents satellite connectivity
    lightImage: '/static/landing-page/hero/satellite-graphic.png',
    darkImage: '/static/landing-page/hero/satellite-graphic-dark.png',
    text: 'Seamlessly transmit data via satellite for global connectivity, even in the most remote areas.',
  },
  {
    title: 'BLE Connectivity',
    link: '/guides/ble/intro',
    icon: BluetoothFilled, // Change to an icon that fits BLE if needed
    lightImage: '/static/landing-page/hero/ble-graphic.png',
    darkImage: '/static/landing-page/hero/ble-graphic-dark.png',
    text: 'Integrate low-energy Bluetooth communication for efficient and secure device connectivity.',
  },
  // Add or update other product items as needed.
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  lightImage,
  darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'w-[90vw] border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800 sm:w-[440px]'
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

export default function HeroSection() {
  return (
    <div className="noise-bg pb-14">
      <section className="no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            Build with Hubble Network
          </h2>
          <p className="max-w-xl text-center text-text-400">
          At Hubble, we're redefining global connectivity. Seamlessly integrate satellite and BLE network communication into your applications with our flexible, scalable SDK—designed for effortless adaptation across diverse environments, including real-time operating systems.
          </p>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-6 px-4">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </div>
  );
}
