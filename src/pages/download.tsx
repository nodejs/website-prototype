import React, { useState } from 'react';
import {
  useReleaseHistory,
  getStaticReleaseData,
} from '../hooks/useReleaseHistory';
import { detectOS } from '../util/detectOS';
import Layout from '../components/Layout';
import DownloadHeader from '../components/DownloadHeader';
import DownloadToggle from '../components/DownloadToggle';
import DownloadCards from '../components/DownloadCards';
import DownloadReleases from '../components/DownloadReleases';
import DownloadAdditional from '../components/DownloadAdditional';
import '../styles/download.scss';

export default function DownloadPage(): JSX.Element {
  const releaseHistory = useReleaseHistory().slice(0, 50);
  const staticReleaseData = getStaticReleaseData();
  const [typeRelease, setTypeRelease] = useState('LTS');

  const userOS = detectOS();
  const lts = releaseHistory.find((release): boolean => release && release.lts);
  const current = releaseHistory.find(
    (release): boolean => release && !release.lts
  );

  const selectedType = typeRelease === 'LTS' ? lts : current;
  const handleTypeReleaseToggle = (
    selected: React.SetStateAction<string>
  ): void => setTypeRelease(selected);

  return (
    <Layout title="Download Node.js" description="Come get me!">
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
        <DownloadReleases releases={staticReleaseData} />
        <DownloadAdditional
          line={selectedType}
          selectedTypeRelease={typeRelease}
          handleTypeReleaseToggle={handleTypeReleaseToggle}
        />
      </span>
    </Layout>
  );
}
