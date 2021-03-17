import React from 'react';
import { render } from '@testing-library/react';
import '../../../../test/__mocks__/intersectionObserverMock';

import Article from '..';
import {
  createLearnPageData,
  createLearnPageContext,
} from '../../../../test/__fixtures__/page';

describe('Article component', () => {
  it('renders correctly', () => {
    const learnPageData = createLearnPageData();
    const learnPageContext = createLearnPageContext();

    const {
      doc: {
        frontmatter: { title, description },
        html,
        fields: { authors },
      },
    } = learnPageData;

    const { relativePath, next, previous } = learnPageContext;

    const { container } = render(
      <Article
        title={title}
        tableOfContents={description}
        html={html}
        next={next}
        previous={previous}
        authors={authors}
        relativePath={relativePath}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
