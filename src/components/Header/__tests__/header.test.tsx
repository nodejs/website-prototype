import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

describe('Tests for Header component', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
