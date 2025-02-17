import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from '@fluentui/react-icons';

interface Resource {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

const ALL_RESOURCES: Resource[] = [
  {
    url: '/guides/hubble-migration-guide',
    type: 'blog',
    title: 'Migrate to Hubble v2 SDK',
    description:
      'Discover our upgraded v2 SDK for Hubble Network – faster, more intuitive, and built for modern connectivity.',
    image:
      'sdk-image.png',
    duration: '3 min',
  },
  {
    url: 'https://hubble.network/blog/ble-in-depth/',
    type: 'blog',
    title: 'BLE Communication in Depth',
    description:
      'Explore how Bluetooth Low Energy (BLE) works and how Hubble Network leverages it for efficient connectivity.',
    image:
      'ble-image.png',
    duration: '10 min',
  },
  {
    url: 'https://www.youtube.com/watch?v=VIDEO_ID_1',
    type: 'video',
    title: 'Integrating Hubble BLE SDK',
    description:
      'Learn how to integrate the Hubble BLE SDK into your application for seamless connectivity.',
    image: 'sdk-image.png',
    duration: '5 min',
  },
  {
    url: 'https://www.youtube.com/watch?v=VIDEO_ID_2',
    type: 'video',
    title: 'Building a Hubble BLE-enabled App',
    description:
      'Watch how Hubble Network enables BLE connectivity in a sample application.',
    image: 'ble-image.png',
    duration: '5 min',
  },
  {
    url: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
    type: 'video',
    title: 'Interacting with Hubble BLE APIs',
    description:
      'Learn how to interact with Hubble BLE APIs for seamless device connectivity.',
    image: 'ble-image.png',
    duration: '7 min',
  },
];

function Resource({
  type,
  url,
  image,
  title,
  description,
  duration,
}: Resource) {
  return (
    <Link
      className="fade-in group flex flex-col justify-between"
      key={title}
      href={url}
    >
      <div>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
          {title}
        </h3>
        <p className="leading-snug text-text-400">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-text-400">
          {`${duration} ${type === 'video' ? 'watch' : 'read'}`}
        </div>
      </div>
    </Link>
  );
}

export default function ResourcesSection() {
  const [page, setPage] = useState(1);
  const [activeType, setActiveType] = useState<'all' | 'blog' | 'video'>('all');

  const resources =
    activeType === 'all'
      ? ALL_RESOURCES
      : ALL_RESOURCES.filter((r) => r.type === activeType);

  const currentResources = resources.slice((page - 1) * 3, page * 3);

  const pages = Math.ceil(resources.length / 3);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="no-underline-links my-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="hubble-badge">RESOURCES</span>
            <h2 className="mb-6 text-4xl">Want to know more about Hubble Network?</h2>
          </div>
          <Link
            to="https://hubble.network/blog"
            className="font-jakarta text-sm font-semibold text-primary"
          >
            All Blogs <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="mb-6 inline-flex gap-1 rounded-lg bg-secondary-700 p-2 font-jakarta text-sm font-semibold dark:bg-secondary-700">
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'all' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => {
              setActiveType('all');
              setPage(1);
            }}
          >
            All
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'blog' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => {
              setActiveType('blog');
              setPage(1);
            }}
          >
            Blogs
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'video' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => {
              setActiveType('video');
              setPage(1);
            }}
          >
            Videos
          </button>
        </div>

        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {currentResources.map((resource, idx) => (
              <Resource {...resource} key={idx} />
            ))}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              className="top-1/2 -left-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              className="top-1/2 -right-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
