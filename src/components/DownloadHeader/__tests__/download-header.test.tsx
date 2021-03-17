import React from 'react';
import { render } from '@testing-library/react';
import DownloadHeader from '..';

describe('DownloadHeader component', (): void => {
  it('renders correctly', (): void => {
    const { container } = render(
      <DownloadHeader
        release={{
          date: '2020-09-15',
          files: [],
          lts: false,
          modules: '83',
          npm: '6.14.8',
          openssl: '1.1.1g',
          security: true,
          uv: '1.39.0',
          v8: '8.4.371.19',
          version: 'v14.11.0',
          zlib: '1.2.11',
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
