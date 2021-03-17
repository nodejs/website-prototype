import React from 'react';
import { render } from '@testing-library/react';
import MacOSPanel from '../MacOSPanel';

describe('Tests for MacOSPanel component', () => {
  it('renders correctly', () => {
    const { container } = render(<MacOSPanel />);
    expect(container).toMatchSnapshot();
  });
});
