import React from 'react';

import { NodeReleaseData } from '../../hooks/useReleaseHistory';
import './DownloadTable.scss';

interface Props {
  releases: NodeReleaseData[];
}

const DownloadTable = ({ releases }: Props): JSX.Element => (
  <div className="downloads-table-container">
    <table className="downloads-table">
      <thead>
        <tr>
          <th>Release</th>
          <th>Status</th>
          <th>Codename</th>
          <th>Initial Release</th>
          <th>Active LTS Start</th>
          <th>Maintainance LTS Start</th>
          <th>End of Life</th>
        </tr>
      </thead>
      <tbody>
        {releases.map(
          ({
            release,
            status,
            codename,
            initialRelease,
            activeLTSStart,
            maintenanceLTSStart,
            endOfLife,
          }: NodeReleaseData): JSX.Element => {
            // Check if release is pending or not
            const isPending = status === 'Pending';
            // Download hyperlink for release
            const releaseDownloadLink = `https://nodejs.org/download/release/latest-${release}.x/`;
            // Download hyperlink for codename
            const codenameReleaseLink = `https://nodejs.org/download/release/latest-${codename.toLowerCase()}/`;

            return (
              <tr key={release}>
                <td>
                  {isPending ? (
                    release
                  ) : (
                    <a href={releaseDownloadLink}>{release}</a>
                  )}
                </td>
                <td>{status || ''}</td>
                <td>
                  {codename ? (
                    <a href={codenameReleaseLink}>{codename}</a>
                  ) : null}
                </td>
                <td>{initialRelease}</td>
                <td>{activeLTSStart}</td>
                <td>{maintenanceLTSStart}</td>
                <td>{endOfLife}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  </div>
);

export default DownloadTable;
