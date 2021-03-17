import React from 'react';
import { render } from '@testing-library/react';
import Pagination from '..';
import { createPaginationInfo } from '../../../../test/__fixtures__/page';

describe('Pagination component', () => {
  it('renders links to the next and previous page', () => {
    const paginationInfo = createPaginationInfo();
    const { container } = render(
      <Pagination next={paginationInfo} previous={paginationInfo} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correctly when there is no next page', () => {
    const paginationInfo = createPaginationInfo();
    const { container } = render(<Pagination previous={paginationInfo} />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly when there is no previous page', () => {
    const paginationInfo = createPaginationInfo();
    const { container } = render(<Pagination next={paginationInfo} />);
    expect(container).toMatchSnapshot();
  });

  it('only renders links to pages that has a title', () => {
    const paginationInfo = createPaginationInfo();
    const nextPaginationInfo = { slug: 'test-slug', title: null };
    const { container } = render(
      <Pagination next={nextPaginationInfo} previous={paginationInfo} />
    );
    expect(container).toMatchSnapshot();
  });
});
