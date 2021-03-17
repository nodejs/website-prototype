import React from 'react';
import { render } from '@testing-library/react';
import LinuxPanel from '../LinuxPanel';

describe('Tests for LinuxPanel component', () => {
  it('renders correctly', () => {
    const { container } = render(<LinuxPanel />);
    expect(container).toMatchSnapshot();
  });
});
