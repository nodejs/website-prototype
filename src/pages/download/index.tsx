import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { detectOS } from '../../util/detectOS';
import { getUpcomingReleases } from '../../util/getUpcomingReleases';
import Layout from '../../components/Layout';
import DownloadHeader from '../../components/DownloadHeader';
import DownloadToggle from '../../components/DownloadToggle';
import DownloadCards from '../../components/DownloadCards';
import DownloadReleases from '../../components/DownloadReleases';
import DownloadAdditional from '../../components/DownloadAdditional';
import { NodeReleaseData, NodeReleaseLTSNPMVersion } from '../../types';
import '../../styles/download.scss';

export interface DownloadNodeReleases {
  nodeReleases: {
    nodeReleasesData: NodeReleaseData[];
    nodeReleasesLTSNPMVersion: NodeReleaseLTSNPMVersion[];
  };
}

interface Props {
  location: Location;
  data: DownloadNodeReleases;
}

export default function DownloadPage({
  location,
  data: { nodeReleases },
}: Props): JSX.Element {
  const { nodeReleasesData, nodeReleasesLTSNPMVersion } = nodeReleases;
  const [typeRelease, setTypeRelease] = useState('LTS');

  const userOS = detectOS();
  const lts = nodeReleasesLTSNPMVersion.find(
    (release): boolean => !!release.lts
  );
  const current = nodeReleasesLTSNPMVersion.find(
    (release): boolean => release && !release.lts
  );

  const selectedType = typeRelease === 'LTS' ? lts : current;
  const handleTypeReleaseToggle = (
    selected: React.SetStateAction<string>
  ): void => setTypeRelease(selected);

  const upcomingReleases = getUpcomingReleases(nodeReleasesData);

  return (
    <Layout
      title="Download Node.js"
      description="Come get me!"
      location={location}
    >
      <span className="home-page -download">
        <DownloadHeader release={selectedType} />
        <p className="release-description">
          Download the Node.js source code, a pre-built installer for your
          platform, or install via package manager.
        </p>
        <DownloadToggle
          selected={typeRelease}
          handleClick={handleTypeReleaseToggle}
        />
        <DownloadCards line={selectedType} userOS={userOS} />
        <DownloadReleases
          nodeReleasesData={nodeReleasesData}
          upcomingReleases={upcomingReleases}
        />
        <DownloadAdditional
          line={selectedType}
          selectedTypeRelease={typeRelease}
          handleTypeReleaseToggle={handleTypeReleaseToggle}
        />
      </span>
    </Layout>
  );
}

export const query = graphql`
  query {
    nodeReleases {
      nodeReleasesData {
        activeLTSStart
        codename
        endOfLife
        initialRelease
        maintenanceLTSStart
        release
        status
      }
      nodeReleasesLTSNPMVersion: nodeReleasesDataDetail {
        lts
        version
        npm
      }
    }
  }
`;
