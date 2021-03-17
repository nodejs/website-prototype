import React, { useState, useEffect } from 'react';

import { ReleaseData } from '../../hooks/useReleaseHistory';
import appleLogo from '../../images/logos/apple-logo.svg';
import microsoftLogo from '../../images/logos/microsoft-download-logo.svg';
import sourceCodeIcon from '../../images/logos/source-code-icon.svg';
import { UserOS } from '../../util/detectOS';
import DownloadCard from './DownloadCard';
import './DownloadCards.scss';

interface Props {
  line?: ReleaseData;
  userOS: UserOS;
}

export default function DownloadCards({ line, userOS }: Props): JSX.Element {
  const fileName = line?.version;
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setSelected(
      ![UserOS.WIN, UserOS.MAC, UserOS.MOBILE].includes(userOS)
        ? 'SOURCECODE'
        : userOS
    );
  }, [userOS]);

  const downloadTypes = [
    {
      label: 'Windows Installer',
      icon: microsoftLogo,
      name: UserOS.WIN,
      fileName: `node-${fileName}-x86.msi`,
      download: `https://nodejs.org/dist/${fileName}/node-${fileName}-x86.msi`,
    },
    {
      label: 'MAC Installer',
      icon: appleLogo,
      name: UserOS.MAC,
      fileName: `node-${fileName}.pkg`,
      download: `https://nodejs.org/dist/${fileName}/node-${fileName}.pkg`,
    },
    {
      label: 'Source Code',
      name: 'SOURCECODE',
      icon: sourceCodeIcon,
      fileName: `node-${fileName}.tar.gz`,
      download: `https://nodejs.org/dist/${fileName}/node-${fileName}.tar.gz`,
    },
  ];

  return (
    <ul
      className="download-cards"
      role="tablist"
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent): void => {
        const currentIndex = downloadTypes.findIndex(d => d.name === selected);

        let direction = null;
        if (e.key === 'ArrowLeft') {
          direction = 'left';
        }
        if (e.key === 'ArrowRight') {
          direction = 'right';
        }
        if (!direction) return;

        let nextIndex = currentIndex;
        nextIndex += direction === 'left' ? -1 : 1;
        if (nextIndex < 0) {
          nextIndex = downloadTypes.length - 1;
        } else if (nextIndex >= downloadTypes.length) {
          nextIndex = 0;
        }

        const nextItem = downloadTypes[nextIndex].name;
        setSelected(nextItem);
      }}
    >
      {downloadTypes.map(
        (os): JSX.Element => {
          return (
            <DownloadCard
              key={os.name}
              name={os.name}
              icon={os.icon}
              label={os.label}
              download={os.download}
              fileName={os.fileName}
              selected={selected === os.name}
              onSelect={setSelected}
            />
          );
        }
      )}
    </ul>
  );
}
