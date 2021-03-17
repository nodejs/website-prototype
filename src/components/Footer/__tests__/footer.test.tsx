import React from 'react';
import { render } from '@testing-library/react';
import Footer from '..';

describe('Tests for Footer component', () => {
  it('renders correctly', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
