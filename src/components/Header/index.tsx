import React from 'react';

import { Link } from '..';
import logoLight from '../../images/logo-light.svg';
import logoDark from '../../images/logo-dark.svg';
import styles from './header.module.scss';

// should be reaplaced with GraphQL data

const content = {
  navigationLinks: [
    {
      link: 'https://nodejs.org/en/docs/',
      text: 'Documentation',
    },
    {
      link: 'https://github.com/nodejs/nodejs.dev',
      text: 'GitHub',
    },
    {
      link: 'https://nodejs.org/en/download/',
      text: 'Downloads',
    },
  ],
  toggleTheme: 'Toggle theme',
};

const Header = (): JSX.Element => (
  <header className={styles.mainHeader}>
    <nav className={styles.navigation}>
      <Link to="/">
        <img
          src={logoLight}
          alt="Node.js"
          className={[styles.navigationLogo, 'light-mode-only'].join(' ')}
        />
        <img
          src={logoDark}
          alt="Node.js"
          className={[styles.navigationLogo, 'dark-mode-only'].join(' ')}
        />
      </Link>
      {content.navigationLinks.map(
        (item, i): JSX.Element => (
          <Link
            to={item.link}
            key={`header-navigation-link-${i * 3.14}`}
            className={styles.navigationItem}
          >
            {item.text}
          </Link>
        )
      )}
    </nav>
    <div className={styles.panel}>
      <div className={styles.navigationItem}>
        <button
          className={styles.themeToggler}
          onClick={(): boolean => document.body.classList.toggle('dark-mode')}
          title={content.toggleTheme}
          type="button"
        >
          <i className="material-icons light-mode-only">nights_stay</i>
          <i className="material-icons dark-mode-only">wb_sunny</i>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
