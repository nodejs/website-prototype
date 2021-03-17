import React from 'react';
import DownloadTable from './DownloadTable';
import UpcomingReleases from '../UpcomingReleases';
import { NodeReleaseData } from '../../hooks/useReleaseHistory';
import './DownloadReleases.scss';

interface Props {
  releases: NodeReleaseData[];
}

export default function DownloadReleases({ releases }: Props): JSX.Element {
  return (
    <div className="download-releases">
      <h2 className="download-releases__title">Upcoming Releases</h2>
      <UpcomingReleases />
      <p className="lts__text">
        Major Node.js versions enter Current release status for six months,
        which gives library authors time to add support for them. After six
        months, odd-numbered releases (9, 11, etc.) become unsupported, and
        even-numbered releases (10, 12, etc.) move to Active LTS status and are
        ready for general use. LTS release status is &quot;long-term
        support&quot;, which typically guarantees that critical bugs will be
        fixed for a total of 30 months. Production applications should only use
        Active LTS or Maintenance LTS releases.
      </p>
      <DownloadTable releases={releases} />
    </div>
  );
}
