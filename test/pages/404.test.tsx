import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../../src/pages/404';

import { createReleaseData } from '../__fixtures__/page';

import { ReleaseData } from '../../src/hooks/useReleaseHistory';

const mockReleaseData = createReleaseData();

jest.mock('../../src/hooks/useReleaseHistory', () => ({
  useReleaseHistory: (): ReleaseData[] => mockReleaseData,
}));

describe('404 page', () => {
  it('renders correctly', () => {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });
});
