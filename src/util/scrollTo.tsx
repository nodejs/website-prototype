import { isMobileScreen } from './isScreenWithinWidth';

/* eslint-disable */
// this is from stack overflow I assume
const easeInOutCubic = (t: number, b: number, c: number, d: number) =>
  (t /= d / 2) < 1
    ? (c / 2) * t * t * t + b
    : (c / 2) * ((t -= 2) * t * t + 2) + b;
/* eslint-enable */

export function scrollTo(
  scrollToPoint: number,
  element: HTMLElement | null = null,
  duration = 333
): Promise<boolean> {
  const start =
    ((element && element.scrollTop) ||
      window.pageYOffset ||
      document.documentElement.scrollTop) -
    ((element && element.clientTop) || 0);
  const change = scrollToPoint - start;
  let previousTime = window.performance.now();
  let currentTime = 0;

  return new Promise<boolean>((resolve): void => {
    const animateScroll = (): void => {
      const time = window.performance.now();
      const increment = time - previousTime;
      previousTime = time;
      currentTime += increment;
      (element || document.scrollingElement || window).scrollTo(
        0,
        easeInOutCubic(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        window.requestAnimationFrame(animateScroll);
      }
      resolve(true);
    };
    animateScroll();
  });
}

const SPEED_MODIFIER = 0.9;
const BASE_TIME = 500;

interface ScrollParams {
  newScrollPos: number;
  scrollWindow: null | HTMLElement;
  scrollTime: number;
}

export const calcNavScrollParams = (
  linkHeight: number,
  navElement: HTMLElement
): ScrollParams => {
  const navRect = navElement.getBoundingClientRect();
  let newScrollPos: number;
  let scrollWindow: HTMLElement | null;
  if (isMobileScreen()) {
    // phone
    scrollWindow = null;
    newScrollPos = linkHeight - window.screen.height / 2;
  } else {
    // tablet
    scrollWindow = navElement;
    newScrollPos =
      linkHeight -
      navRect.top -
      (navElement.offsetHeight - navElement.offsetTop) / 2;
  }
  const scrollTime = newScrollPos * SPEED_MODIFIER + BASE_TIME;

  return {
    newScrollPos,
    scrollWindow,
    scrollTime,
  };
};
