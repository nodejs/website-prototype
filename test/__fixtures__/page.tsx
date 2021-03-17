import {
  LearnPageData,
  PaginationInfo,
  LearnPageContext,
  NavigationSectionData,
} from '../../src/types';

import { ReleaseData } from '../../src/hooks/useReleaseHistory';

export const createPaginationInfo = () =>
  ({
    slug: 'test-slug',
    title: 'test-title',
  } as PaginationInfo);

export const createNavigationSectionData = () =>
  ({
    'test-section': [
      {
        slug: 'test-slug-1',
        title: 'test-title-1',
        section: 'test-section-1',
      },
      {
        title: 'test-title-2',
        slug: 'test-slug-2',
        section: 'test-section-2',
      },
    ],
    'test-section2': [
      {
        slug: 'test-slug-3',
        title: 'test-title-3',
        section: 'test-section-3',
      },
      {
        title: 'test-title-4',
        slug: 'test-slug-4',
        section: 'test-section-4',
      },
    ],
  } as NavigationSectionData);

export const createLearnPageData = () =>
  ({
    doc: {
      id: 'test-id',
      html: '<span>Test html</span>',
      frontmatter: {
        title: 'test-title',
        description: 'test-description',
      },
      fields: {
        authors: ['test-user1', 'test-user2'],
      },
    },
  } as LearnPageData);

export const createReleaseData = () =>
  [
    {
      version: 'mock-version-1',
      date: 'mock-date',
      files: ['aix-ppc64', 'headers', 'linux-arm64'],
      npm: 'mock-npm',
      v8: 'mock-v8',
      uv: 'mock-uv',
      zlib: 'mock-zlib',
      openssl: 'mock-openssl',
      modules: 'mock-module',
      lts: true,
      security: false,
    },
    {
      version: 'mmock-version-2',
      date: 'mock-date',
      files: ['aix-ppc64', 'headers', 'linux-arm64', 'linux-armv7l'],
      npm: 'mock-npm',
      v8: 'mock-v8',
      uv: 'mock-uv',
      zlib: 'mock-zlib',
      openssl: '1.1.1g',
      modules: '83',
      lts: true,
      security: false,
    },
  ] as ReleaseData[];

export const createLearnPageContext = () =>
  ({
    slug: 'test-slug',
    relativePath: 'test-path',
    next: createPaginationInfo(),
    previous: createPaginationInfo(),
    navigationData: createNavigationSectionData(),
  } as LearnPageContext);
