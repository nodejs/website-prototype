import React from 'react';
import Hero from '../src/components/Hero';
import '../src/components/Hero/Hero.scss';
import '../src/styles/tokens.scss';
import '../src/styles/layout.scss';
import '../src/styles/mobile.scss';

export default {
  title: 'Hero',
  component: Hero,
};

const title = 'Run JavaScript Everywhere.';
const subTitle =
  'Node.js is a free, open-sourced, cross-platform JavaScript run-time environment that lets developers write command line tools and server-side scripts outside of a browser.';

export const root = (): JSX.Element => (
  <Hero title={title} subTitle={subTitle} />
);
