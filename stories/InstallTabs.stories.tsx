import React from 'react';
import InstallTabs from '../src/components/InstallTabs';
import '../src/components/InstallTabs/InstallTabs.scss';
import '../src/styles/tokens.scss';
import '../src/styles/layout.scss';
import '../src/styles/mobile.scss';

export default {
  title: 'InstallTabs',
  component: InstallTabs,
};

export const root = (): JSX.Element => <InstallTabs />;
