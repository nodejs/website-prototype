import React from 'react';
import { render } from '@testing-library/react';

import { ReleaseData } from '../../../hooks/useReleaseHistory';

import { createReleaseData } from '../../../../test/__fixtures__/page';

import Hero from '..';

const mockReleaseData = createReleaseData();

jest.mock('../../../hooks/useReleaseHistory', () => ({
  useReleaseHistory: (): ReleaseData[] => mockReleaseData,
}));

describe('Hero component', () => {
  it('renders correctly', () => {
    const title = 'Introduction to Node.js';
    const subTitle = 'Mock SubTitle';
    const { container } = render(<Hero title={title} subTitle={subTitle} />);
    expect(container).toMatchSnapshot();
  });
});
