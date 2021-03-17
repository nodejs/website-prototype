import React from 'react';
import { render } from '@testing-library/react';
import Author from '..';

describe('Author component', () => {
  it('renders correctly', () => {
    const username = 'test-author';
    const { container } = render(<Author username={username} size="60" />);
    expect(container).toMatchSnapshot();
  });

  it('does not render without a username', () => {
    const { container } = render(
      <Author key={null} username={null} size={null} />
    );
    expect(container).toMatchSnapshot();
  });
});
