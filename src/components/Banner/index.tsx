import React from 'react';
import './Banner.scss';

const bannerLink =
  'https://nodejs.org/en/blog/vulnerability/february-2020-security-releases/';

/**
 * The banner is used for displaying upcoming Nodejs events and important announcements ex. security updates
 * Usage
      <p>
        <a href={bannerLink}>
          <button className="bannerButton" type="button">
            Blog post
          </button>
        </a>
        New security releases now available for all release lines
      </p>
 */
const Banner = (): JSX.Element => {
  return (
    <div className="banner">
      <p>
        <a href={bannerLink}>
          <button className="bannerButton" type="button">
            Blog post
          </button>
        </a>
        New security releases now available for all release lines
      </p>
    </div>
  );
};

export default Banner;
