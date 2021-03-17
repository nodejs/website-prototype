import React from 'react';
import classnames from 'classnames';
import hexagonFilled from '../../../images/icons/hexagon-filled.svg';
import hexagonOutline from '../../../images/icons/hexagon-outline.svg';
import { UpcomingRelease, RELEASE_TYPES } from '../upcomingReleases';
import './UpcomingReleasesItem.scss';

type Props = UpcomingRelease;

export default function UpcomingReleasesItem({
  releaseType,
  releaseDate,
  alreadyReleased,
}: Props): JSX.Element {
  const image = alreadyReleased ? hexagonFilled : hexagonOutline;
  const className = classnames(`upcoming-releases__item--${releaseType}`, {
    'upcoming-releases__item--to-be-released': !alreadyReleased,
  });

  return (
    <div className={className}>
      <img src={image} alt="hexagon icon" />
      <p className="release-title">{RELEASE_TYPES[releaseType]}</p>
      <p className="release-date">
        {alreadyReleased ? 'Released' : 'To be released'} {releaseDate}
      </p>
    </div>
  );
}
