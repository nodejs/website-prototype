import React from 'react';
import ReleaseToggle from '../src/components/ReleaseToggle';
import '../src/styles/tokens.scss';
import '../src/styles/layout.scss';
import '../src/styles/mobile.scss';

export default {
  title: 'ReleaseToggle',
  component: ReleaseToggle,
};

export const root = (): JSX.Element => (
  <ReleaseToggle selected={false} onToggle={() => null} />
);

export const checked = (): JSX.Element => (
  <ReleaseToggle selected onToggle={() => null} />
);
