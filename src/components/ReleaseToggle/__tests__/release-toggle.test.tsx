import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ReleaseToggle from '..';

/**
 * We need to spy on `Math.random()` to prevent random generation of id
 * inside `<input>` element in `ReleaseToggle`component.
 */
const mathRandomSpy = jest.spyOn(Math, 'random');

afterEach(() => {
  jest.clearAllMocks();
});

describe('ReleaseToggle component', (): void => {
  it('renders correctly when selected is true', (): void => {
    const mockOnToggle = jest.fn();
    mathRandomSpy.mockImplementation(() => 1);

    const { container } = render(
      <ReleaseToggle selected onToggle={mockOnToggle} />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly when selected is false', (): void => {
    const mockOnToggle = jest.fn();
    mathRandomSpy.mockImplementation(() => 1);

    const { container } = render(
      <ReleaseToggle selected={false} onToggle={mockOnToggle} />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly and onToggle is called when clicked', (): void => {
    const mockOnToggle = jest.fn();
    mathRandomSpy.mockImplementation(() => 1);

    const { getByLabelText } = render(
      <ReleaseToggle selected={false} onToggle={mockOnToggle} />
    );
    const inputElement = getByLabelText('current');

    fireEvent.click(inputElement);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith(true);
  });
});
