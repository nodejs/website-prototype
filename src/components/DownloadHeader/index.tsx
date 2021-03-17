import React from 'react';
import { ReleaseData } from '../../hooks/useReleaseHistory';
import './DownloadHeader.scss';

interface Props {
  release?: ReleaseData;
}

export default function DownloadHeader({ release }: Props): JSX.Element {
  const nodev = release?.version;
  const npmv = release?.npm;
  const lts = release?.lts;

  return (
    <>
      <div className="download-page__navigation">
        <div>
          HOME /
          <span className="download-page__navigation--active"> downloads</span>
        </div>
        <div>
          {lts ? 'LATEST LTS' : 'CURRENT'} VERSION {nodev}
        </div>
      </div>
      <div className="download-page__navigation">
        <div className="download-page__navigation--title">Downloads</div>
        <div className="download-page__navigation--npm">
          (includes npm {npmv})
        </div>
      </div>
    </>
  );
}
