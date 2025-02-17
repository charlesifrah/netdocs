import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">
          How can we help you today?
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Demo Section */}
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/calendar.svg"
              alt="Schedule a demo"
              width="48"
              height="48"
            />
            <h3 className="my-3">Schedule a Demo</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Request a personalized demo to explore how Hubble Network can enhance your connectivity solutions.
            </p>
            <Link
              href="https://hubble.network/schedule-demo"
              className="text-primary dark:text-primary-100"
            >
              Schedule a Demo &rarr;
            </Link>
          </div>

          {/* Support Section */}
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/customer.svg"
              alt="Support"
              width="48"
              height="48"
            />
            <h3 className="my-3">Support</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Hubble Network’s dedicated support team is here to help you with any questions or issues.
            </p>
            <Link
              href="https://hubble.network/contact"
              className="text-primary dark:text-primary-100"
            >
              Contact Support &rarr;
            </Link>
          </div>

          {/* FAQs Section */}
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/chat.svg"
              alt="FAQs"
              width="48"
              height="48"
            />
            <h3 className="my-3">FAQs</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Browse our FAQs to find answers to common questions about Hubble Network.
            </p>
            <Link href="/faq" className="text-primary dark:text-primary-100">
              View FAQs &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
