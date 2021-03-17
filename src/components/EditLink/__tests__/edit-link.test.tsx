import React from 'react';
import { render } from '@testing-library/react';
import EditLink from '..';

describe('EditLink component', () => {
  it('renders correctly', () => {
    const path = '0002-node-history/index.md';
    const { container } = render(<EditLink relativePath={path} />);
    expect(container).toMatchSnapshot();
  });
  it('renders without a relative path', () => {
    const { container } = render(<EditLink relativePath={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
