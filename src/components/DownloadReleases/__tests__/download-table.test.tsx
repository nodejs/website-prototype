import React from 'react';
import { render } from '@testing-library/react';
import DownloadTable from '../DownloadTable';

describe('DownloadTable component', (): void => {
  it('renders correctly', (): void => {
    const { container } = render(
      <DownloadTable
        releases={[
          {
            release: 'v15',
            status: 'Pending',
            codename: '',
            initialRelease: '2020-10-20',
            activeLTSStart: '',
            maintenanceLTSStart: '2021-04-01',
            endOfLife: '2021-06-01',
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
