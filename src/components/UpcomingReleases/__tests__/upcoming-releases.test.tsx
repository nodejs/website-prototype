import React from 'react';
import { render } from '@testing-library/react';
import UpcomingReleases from '..';

describe('UpcomingReleases component', (): void => {
  it('renders correctly', (): void => {
    const { container } = render(<UpcomingReleases />);
    expect(container).toMatchSnapshot();
  });
});
