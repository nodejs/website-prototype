import React from 'react';
import { render } from '@testing-library/react';
import NavigationSection from '..';

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop(): void {}

describe('NavigationSection component', (): void => {
  it('renders correctly', (): void => {
    const { container } = render(
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
    expect(container).toMatchSnapshot();
  });
});
