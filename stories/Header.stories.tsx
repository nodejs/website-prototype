import React from 'react';
import Header from '../src/components/Header';
import '../src/components/Header/Header.scss';
import '../src/styles/tokens.scss';
import '../src/styles/layout.scss';
import '../src/styles/mobile.scss';

export default {
  title: 'Header',
  component: Header,
};
export const root = (): JSX.Element => <Header />;
