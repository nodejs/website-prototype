import React, { useState, useRef, useEffect } from 'react';
import NavigationSection from '../../components/NavigationSection';
import { NavigationSectionData, NavigationSectionItem } from '../../types';
import { isMobileScreen } from '../../util/isScreenWithinWidth';
import { scrollTo, calcNavScrollParams } from '../../util/scrollTo';

interface Props {
  sections: NavigationSectionData;
  currentSlug: string;
  previousSlug: string;
  label: string;
}

const Navigation = ({
  sections,
  currentSlug,
  previousSlug,
  label,
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navElement = useRef<HTMLElement | null>(null);
  const toggle = (): void => setIsOpen(!isOpen);
  const onItemClick = (): void => {
    if (isMobileScreen()) {
      toggle();
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const nav = navElement.current;
      if (nav) {
        //  Get current link element
        const currentLinkElem = document.getElementById(`link-${currentSlug}`);
        // Get scroll position for current link
        const { newScrollPos, scrollWindow, scrollTime } = calcNavScrollParams(
          currentLinkElem?.getBoundingClientRect().top || 0,
          nav
        );
        // If it's mobile screen and nav is not open, do nothing
        if (isMobileScreen() && !isOpen) return;
        // If it's mobile screen, directly scroll to current element when nav opens
        if (isMobileScreen()) {
          scrollTo(newScrollPos, scrollWindow, scrollTime);
        } else if (!previousSlug) {
          // If there's no previous slug, directly scroll to the current link
          nav.scrollTop = newScrollPos;
        } else {
          // Get previous link element
          const prevLinkElem = document.getElementById(`link-${previousSlug}`);
          // Get previous element's position
          const prevElemScroll = calcNavScrollParams(
            prevLinkElem?.getBoundingClientRect().top || 0,
            nav
          );
          // First scroll directly to previous element
          nav.scrollTop = prevElemScroll.newScrollPos;
          // Now scroll to current element with animation
          scrollTo(newScrollPos, scrollWindow, scrollTime);
        }
      }
    }
  }, [currentSlug, previousSlug, isOpen]);

  const className = isOpen ? 'side-nav side-nav--open' : 'side-nav';

  const readSections: Set<NavigationSectionItem['slug']> = new Set();
  // Assume section items up to the one currently open have been read. Track
  // their unique slugs in `readSections` set.
  Object.keys(sections).some((sectionKey): boolean => {
    let isCurrentSlug = false;
    sections[sectionKey].some((sectionItem): boolean => {
      isCurrentSlug = sectionItem.slug === currentSlug;
      if (!isCurrentSlug) {
        readSections.add(sectionItem.slug);
      }

      return isCurrentSlug;
    });

    return isCurrentSlug;
  });

  return (
    <nav aria-label={label} className={className} ref={navElement}>
      <button type="button" className="side-nav__open" onClick={toggle}>
        Menu
      </button>
      {Object.keys(sections).map(
        (sectionKey: string): JSX.Element => (
          <NavigationSection
            key={sectionKey}
            title={sectionKey}
            section={sections[sectionKey]}
            currentSlug={currentSlug}
            onItemClick={onItemClick}
            readSections={readSections}
          />
        )
      )}
    </nav>
  );
};

export default Navigation;
