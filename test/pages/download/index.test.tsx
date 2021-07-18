import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DownloadPage, {
  DownloadNodeReleases,
} from '../../../src/pages/download';
import {
  createNodeReleasesData,
  createNodeReleasesDataDetail,
} from '../../__fixtures__/page';
import '../../__mocks__/intersectionObserverMock';

const mockNodeReleasesData = createNodeReleasesData();
const mockNodeReleasesDataDetail = createNodeReleasesDataDetail();
const mockNodeReleasesLTSNPMVersion = mockNodeReleasesDataDetail.map(
  ({ lts, version, npm }) => ({
    lts,
    version,
    npm,
  })
);

const nodeReleaseData: DownloadNodeReleases = {
  nodeReleases: {
    nodeReleasesData: mockNodeReleasesData,
    nodeReleasesLTSNPMVersion: mockNodeReleasesLTSNPMVersion,
  },
};

describe('Download page', () => {
  it('renders correctly', () => {
    const { container } = render(
      <DownloadPage location={window.location} data={nodeReleaseData} />
    );
    expect(container).toMatchSnapshot();
  });

  it('should handle LTS to Current switch', () => {
    const { container } = render(
      <DownloadPage location={window.location} data={nodeReleaseData} />
    );

    fireEvent.click(screen.getAllByText('Current')[0]);

    expect(container).toMatchSnapshot();
  });
});
