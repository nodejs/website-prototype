import React from 'react';
import { render } from '@testing-library/react';
import '../__mocks__/intersectionObserverMock';

import LearnTemplate from '../../src/templates/learn';
import {
  createLearnPageData,
  createLearnPageContext,
} from '../__fixtures__/page';

describe('Learn Template', () => {
  it('renders correctly', () => {
    const learnPageData = createLearnPageData();
    const learnPageContext = createLearnPageContext();

    const { container } = render(
      <LearnTemplate data={learnPageData} pageContext={learnPageContext} />
    );
    expect(container).toMatchSnapshot();
  });
});
