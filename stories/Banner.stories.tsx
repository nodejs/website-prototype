import React from 'react';
import Banner from '../src/components/Banner';
import '../src/components/Banner/Banner.scss';
import '../src/styles/tokens.scss';
import '../src/styles/layout.scss';
import '../src/styles/mobile.scss';

export default {
  title: 'Banner',
  component: Banner,
};
export const root = (): JSX.Element => <Banner />;
