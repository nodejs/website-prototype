import React from 'react';
import NavigationSection from '../src/components/NavigationSection';
import '../src/styles/tokens.scss';
import '../src/styles/layout.scss';
import '../src/styles/mobile.scss';
import '../src/styles/learn.scss';

export default {
  title: 'NavigationSection',
  component: NavigationSection,
};
const noop = (): void => {
  return null;
};

export const root = (): JSX.Element => (
  <NavigationSection
    key="123"
    title="Introduction"
    section={[
      {
        slug: 'intro',
        title: 'Section 1',
        section: '...',
      },
    ]}
    currentSlug=""
    onItemClick={noop}
    readSections={new Set()}
  />
);
