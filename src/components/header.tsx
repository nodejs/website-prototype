import { Link } from 'gatsby';
import React from 'react';
import { css, SerializedStyles } from '@emotion/core';
import logo from '../images/logo.svg';

const ulStyles: SerializedStyles = css`
  @media (max-width: 380px) {
    padding: 0;
  }
  margin: 0 auto;
  padding: 0 4.8rem;
  display: flex;
  align-items: center;
  list-style: none;
`;

const Header = () => (
  <nav className="nav">
    <ul css={ulStyles}>
      <li>
        <Link to="/" style={{ display: 'block' }}>
          <img src={logo} alt="Node.js" className="nav__logo" />
        </Link>
      </li>
      <li className="nav__tabs">
        <a href="/learn">Learn</a>
      </li>
      <li className="nav__tabs">
        <a href="/docs">Documentation</a>
      </li>
      <li className="nav__tabs">
        <a href="/download">Download</a>
      </li>
      <li className="nav__tabs">
        <a target="_blank" href="https://github.com/nodejs/nodejs.dev">
          GitHub
        </a>
      </li>
    </ul>
  </nav>
);

export default Header;
