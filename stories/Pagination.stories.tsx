import React from 'react';
import Pagination from '../src/components/Pagination';
import '../src/styles/tokens.scss';
import '../src/styles/layout.scss';
import '../src/styles/mobile.scss';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const root = (): JSX.Element => (
  <Pagination
    next={{ slug: 'test-slug', title: 'Next' }}
    previous={{ slug: 'test-slug', title: 'Previous' }}
  />
);
