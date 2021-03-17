import React from 'react';

import './DownloadToggle.scss';

interface Props {
  handleClick: (type: string) => void;
  selected: string;
  showDescription?: boolean;
}

export default function DownloadToggle({
  handleClick,
  selected,
  showDescription = true,
}: Props): JSX.Element {
  return (
    <div className="download-toogle">
      <div className="download-toogle__selector">
        <div className="download-toogle__switch">
          <button
            className={
              selected === 'LTS'
                ? 'download-toogle__button -active'
                : 'download-toogle__button'
            }
            type="button"
            role="switch"
            aria-label="Show LTS versions"
            aria-checked={selected === 'LTS'}
            onClick={(): void =>
              handleClick(selected === 'CURRENT' ? 'LTS' : 'CURRENT')
            }
          >
            LTS
          </button>
          <button
            className={
              selected === 'CURRENT'
                ? 'download-toogle__button -current -active'
                : 'download-toogle__button -current'
            }
            type="button"
            role="switch"
            aria-label="Show LTS versions"
            aria-checked={selected === 'LTS'}
            onClick={(): void =>
              handleClick(selected === 'CURRENT' ? 'LTS' : 'CURRENT')
            }
          >
            Current
          </button>
        </div>
      </div>
      {showDescription && (
        <p className="download-toogle__description">
          {selected === 'LTS'
            ? 'Recommended for most users'
            : 'With the latest features'}
        </p>
      )}
    </div>
  );
}
