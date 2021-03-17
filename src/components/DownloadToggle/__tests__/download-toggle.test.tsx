import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DownloadToggle from '..';

describe('DownloadToggle component', (): void => {
  it('renders correctly', (): void => {
    const { container } = render(
      <DownloadToggle selected="LTS" handleClick={jest.fn()} />
    );

    expect(container).toMatchSnapshot();
  });

  it('utilizes click handler correctly', (): void => {
    const mockHandler = jest.fn();
    render(<DownloadToggle selected="LTS" handleClick={mockHandler} />);

    fireEvent.click(screen.getByText('LTS'));
    fireEvent.click(screen.getByText('Current'));

    expect(mockHandler.mock.calls.length).toBe(2);
  });
});
