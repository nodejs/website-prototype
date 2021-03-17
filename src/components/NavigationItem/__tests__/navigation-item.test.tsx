import React from 'react';

import { render } from '@testing-library/react';
import NavigationItem from '..';

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop(): void {}

describe('NavigationItem component', (): void => {
  it('renders correctly', (): void => {
    const { container } = render(
      <NavigationItem
        key="123"
        isRead
        isActive
        slug="versioning"
        title="Versioning"
        onClick={noop}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
