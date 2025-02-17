import React from 'react';
import Link from '@docusaurus/Link';

interface SDKProps {
  icon: string;
  name: string;
  to?: string;
}

function SDK({ icon, to, name }: SDKProps) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center rounded-lg border border-secondary-700 p-2.5 text-inherit hover:border-primary hover:text-primary hover:no-underline"
    >
      <img src={icon} alt={`${name} icon`} className="mr-2 h-7 w-7" />
      <span className="font-medium">{name}</span>
    </Link>
  );
}

export default function SDKs() {
  return (
    <section className="mx-auto mb-32 flex w-full max-w-5xl flex-col p-4 py-0">
      <span className="mb-2 uppercase tracking-wider text-text-400">
        SDK Documentation
      </span>

      <h3 className="mb-12 text-4xl">
        Build your applications with Hubble Network’s SDKs
      </h3>

      {/* UI Kit Section */}
      <div className="mb-10">
        <h4 className="mb-2 text-2xl">UI Kit</h4>

        <p className="mb-6 text-text-400">
          Accelerate your development with our prebuilt library of UI components,
          available for all frameworks.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="React"
            to="/react-ui-kit"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="Angular"
            to="/angular-ui-kit"
            icon="/static/landing-page/sdk-icons/angular.png"
          />
          <SDK
            name="HTML"
            to="/ui-kit"
            icon="/static/landing-page/sdk-icons/html.png"
          />
          <SDK
            name="Flutter"
            to="/flutter"
            icon="/static/landing-page/sdk-icons/flutter.png"
          />
          <SDK
            name="React Native"
            to="/react-native"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="iOS"
            to="/ios"
            icon="/static/landing-page/sdk-icons/swift.png"
          />
          <SDK
            name="Android"
            to="/android"
            icon="/static/landing-page/sdk-icons/kotlin.png"
          />
        </div>
      </div>

      {/* Core SDK Section */}
      <div>
        <h4 className="mb-2 text-2xl">Core SDK</h4>

        <p className="mb-6 text-text-400">
          Our comprehensive, all-in-one SDK for seamless Satellite, BLE, and data communication.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <SDK
            name="JS"
            to="/web-core"
            icon="/static/landing-page/sdk-icons/js.png"
          />
          <SDK
            name="React"
            to="/react-web-core"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="Flutter"
            to="/flutter-core"
            icon="/static/landing-page/sdk-icons/flutter.png"
          />
          <SDK
            name="React Native"
            to="/rn-core"
            icon="/static/landing-page/sdk-icons/react.png"
          />
          <SDK
            name="iOS"
            to="/ios-core"
            icon="/static/landing-page/sdk-icons/swift.png"
          />
          <SDK
            name="Android"
            to="/android-core"
            icon="/static/landing-page/sdk-icons/kotlin.png"
          />
        </div>
      </div>
    </section>
  );
}
