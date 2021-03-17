import React from 'react';
import { NavigationSectionItem } from '../../types';
import NavigationItem from '../NavigationItem';

interface Props {
  key: string;
  title: string;
  section: NavigationSectionItem[];
  currentSlug: string;
  onItemClick: () => void;
  readSections: Set<NavigationSectionItem['slug']>;
}

const NavigationSection = ({
  title,
  section,
  currentSlug,
  onItemClick,
  readSections,
}: Props): JSX.Element => {
  return (
    <ul className="side-nav__list">
      <h2 className="t-body2 side-nav__title">
        <i className="material-icons">offline_bolt</i>
        {title}
      </h2>
      {section.map(
        (item: NavigationSectionItem): JSX.Element => {
          const isRead: boolean = readSections.has(item.slug);

          return (
            <NavigationItem
              key={item.slug}
              title={item.title}
              slug={item.slug}
              isRead={isRead}
              isActive={item.slug === currentSlug}
              onClick={onItemClick}
            />
          );
        }
      )}
    </ul>
  );
};

export default NavigationSection;
