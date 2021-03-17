import React, { useState, FC } from 'react';
import DownloadToggle from '../DownloadToggle';
import { ReleaseData } from '../../hooks/useReleaseHistory';
import { getDownloadableItemsList, Downloadable } from './downloadItems';
import './DownloadAdditional.scss';

const CLASS_NAME = 'download-additional';

interface DownloadButtonProps {
  className: string;
  link: string;
  label: string;
}

const DownloadButton: FC<DownloadButtonProps> = ({
  className,
  link,
  label,
}: DownloadButtonProps) => (
  <a className={className} href={link}>
    <i className="material-icons">get_app</i>
    {label}
  </a>
);

interface DownloadableItemProps {
  item: Downloadable;
  isExapanded: boolean;
  setExapandedItem: (itemName: string) => void;
}

const DownloadableItem: FC<DownloadableItemProps> = ({
  item,
  isExapanded,
  setExapandedItem,
}: DownloadableItemProps) => {
  const onClick = (): void =>
    isExapanded ? setExapandedItem('') : setExapandedItem(item.name);
  const classes = `${CLASS_NAME}__item`.concat(
    isExapanded ? ` ${CLASS_NAME}__item__expanded` : ''
  );
  return (
    <div
      role="button"
      tabIndex={0}
      className={classes}
      onKeyUp={onClick}
      onClick={onClick}
    >
      <div className={`${CLASS_NAME}__item__header`}>
        <div className={`${CLASS_NAME}__item__header__arrow`}>
          {isExapanded ? (
            <div className={`${CLASS_NAME}__item__header__arrow__down`} />
          ) : (
            <div className={`${CLASS_NAME}__item__header__arrow__right`} />
          )}
        </div>
        {item.name}
      </div>

      {isExapanded && (
        <div className={`${CLASS_NAME}__item__body`}>
          {item.links.map(link => (
            <DownloadButton
              className={`${CLASS_NAME}__item__body__link`}
              key={link.label}
              link={link.path}
              label={link.label}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface DownloadAdditionalProps {
  line?: ReleaseData;
  selectedTypeRelease: string;
  handleTypeReleaseToggle: (selected: React.SetStateAction<string>) => void;
}

const DownloadAdditional: FC<DownloadAdditionalProps> = ({
  line,
  selectedTypeRelease,
  handleTypeReleaseToggle,
}: DownloadAdditionalProps): JSX.Element => {
  const [expandedItem, setExapandedItem] = useState('');
  return (
    <div className={CLASS_NAME}>
      <div className={`${CLASS_NAME}__header`}>
        <h3 className={`${CLASS_NAME}__title`}>Additional Downloads</h3>
        <DownloadToggle
          selected={selectedTypeRelease}
          handleClick={handleTypeReleaseToggle}
          showDescription={false}
        />
      </div>
      <div className={`${CLASS_NAME}__body`}>
        {line &&
          getDownloadableItemsList(line?.version).map(item => (
            <DownloadableItem
              key={item.name}
              item={item}
              isExapanded={expandedItem === item.name}
              setExapandedItem={setExapandedItem}
            />
          ))}
      </div>
    </div>
  );
};

export default DownloadAdditional;
