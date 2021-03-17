import React from 'react';
import { render } from '@testing-library/react';
import InstallTabs from '../index';

describe('Tests for InstallTabs component', () => {
  it('renders correctly', () => {
    const { container } = render(<InstallTabs />);
    expect(container).toMatchSnapshot();
  });
});
