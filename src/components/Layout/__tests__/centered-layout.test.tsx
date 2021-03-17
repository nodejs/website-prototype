import React from 'react';

import { render } from '@testing-library/react';
import CenteredLayout from '../centered';

describe('CenteredLayout component', () => {
  it('renders correctly with footer', () => {
    const { container } = render(
      <CenteredLayout
        title="mock-title"
        description="mock-description"
        img="mock-image-url"
        showFooter
      >
        mock-children
      </CenteredLayout>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly without footer', () => {
    const { container } = render(
      <CenteredLayout
        title="mock-title"
        description="mock-description"
        img="mock-image-url"
        showFooter={false}
      >
        mock-children
      </CenteredLayout>
    );
    expect(container).toMatchSnapshot();
  });
});
