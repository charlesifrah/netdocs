import React from 'react';
import Link from '@docusaurus/Link';
import { Linkedin, Twitter } from 'react-feather';

// You may update these usernames as needed for your Hubble community.
const githubUsernames = [
  'vaibhavshn',
  'akigugale',
  'roerohan',
  'thebongy',
  'AshishKumar4',
  'tarushnagpal',
  'ishita1805',
  'milapsingh',
  'harshs-hubble',  // updated to reflect Hubble if desired
  'sagarrakshe',
  'SushrutiNihale',
  'saksham-gt',
];

export default function CommunitySection() {
  return (
    <section className="no-underline-links">
      <div className="mx-auto flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#262626] to-black px-4 py-16 pt-64 text-white dark:from-zinc-200/90 dark:to-white dark:text-zinc-700">
        <h2 className="text-3xl">
          Join the <span className="text-primary-100">Hubble Community</span>
        </h2>
        <p className="mb-10 text-zinc-500">
          Engage with our ever-growing community to get the latest updates,
          product support, and more.
        </p>
        <div className="mx-auto mb-16 flex flex-wrap -space-x-1.5">
          {githubUsernames.map((username) => (
            <img
              key={username}
              src={`https://github.com/${username}.png?size=72`}
              alt={`User ${username}`}
              loading="lazy"
              className="h-6 w-6 rounded-full border-2 border-solid border-white transition hover:-translate-y-2 hover:scale-150 lg:h-12 lg:w-12"
            />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm font-semibold lg:flex-row lg:gap-8">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://twitter.com/hubble_network"
          >
            <Twitter className="h-5 w-5" /> Twitter &rarr;
          </Link>
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://www.linkedin.com/company/hubble-network"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
