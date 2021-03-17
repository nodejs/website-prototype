import React from 'react';
import { render } from '@testing-library/react';
import Banner from '..';

describe('Tests for Header component', () => {
  it('renders correctly', () => {
    const { container } = render(<Banner />);
    expect(container).toMatchSnapshot();
  });
});
