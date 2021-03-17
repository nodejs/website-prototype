import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '..';

describe('Navigation component', (): void => {
  it('renders correctly', (): void => {
    const { container } = render(
      <Navigation
        currentSlug="intro"
        sections={{
          'Getting Started': [
            {
              slug: 'intro',
              title: 'Section 1',
              section: '...',
            },
          ],
          Versions: [
            {
              slug: 'version',
              title: 'Version 1',
              section: '...',
            },
          ],
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
