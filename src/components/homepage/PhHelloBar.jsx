import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { ArrowRightFilled } from '@fluentui/react-icons'; // Import FluentUI icon

function HelloBar() {
  return (
    <a
      href="https://hubble.network/announcement"
      target="_blank"
      className="hello-bar u-hflex-center-center w-inline-block"
    >
      <div className="hello_bar_contents u-hflex-center-center u-gap-10">
        <div className="ph_cat_nd_txt-wrapper u-hflex-left-center u-gap-10">
          <div className="ph_banner_txt">
            Introducing Hubble Network: Revolutionizing Global Connectivity
          </div>
        </div>
        <div className="banner_separator"></div>
        <div className="hello_bar_cta u-hflex-left-center u-gap-8">
          <div className="text-block-98">Discover More</div>
          {/* Replace the <img> with a FluentUI icon */}
          <ArrowRightFilled className="h-6 w-6 text-black" />
        </div>
      </div>
    </a>
  );
}

export default HelloBar;
