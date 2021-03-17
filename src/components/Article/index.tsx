import React from 'react';
import { throttle } from 'throttle-debounce';
import { PaginationInfo } from '../../types';
import AuthorsList from '../../containers/AuthorList';
import EditLink from '../EditLink';
import Pagination from '../Pagination';
import TOC from '../Toc';

interface Props {
  title: string;
  html: string;
  tableOfContents: string;
  authors: string[];
  relativePath?: string;
  editPath?: string;
  next?: PaginationInfo;
  previous?: PaginationInfo;
}

const NAV_HEIGHT = 72;

const Article = ({
  title,
  html,
  tableOfContents,
  previous,
  next,
  relativePath,
  editPath,
  authors,
}: Props): JSX.Element => {
  const element = React.useRef<HTMLElement | null>(null);

  const handleRef = (ref?: HTMLElement | null): void => {
    if (ref) {
      element.current = ref;
    }
  };

  React.useEffect((): (() => void) => {
    let observer: IntersectionObserver;

    if (window.history.state && window.history.state.articleScrollTo) {
      window.scrollTo({
        top: window.history.state.articleScrollTo,
      });
    }

    if (element.current) {
      const handleObserverThrottled = throttle(
        300,
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry): void => {
            // element is already hidden by the nav
            if (entry.boundingClientRect.y < NAV_HEIGHT) {
              if (!entry.target.previousElementSibling) {
                window.history.replaceState(
                  {
                    articleScrollTo: null,
                  },
                  '',
                  null
                );
                return;
              }

              window.history.replaceState(
                {
                  articleScrollTo: document.documentElement.scrollTop,
                },
                '',
                null
              );
            }
          });
        }
      );

      observer = new IntersectionObserver(
        (entries): void => {
          handleObserverThrottled(entries);
        },
        {
          threshold: [0.25, 0.5, 0.75],
          rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px`,
        }
      );

      Array.from(element.current.children).forEach((children): void => {
        observer.observe(children);
      });
    }

    return (): void => {
      if (observer && element.current) {
        Array.from(element.current.children).forEach((children): void => {
          observer.unobserve(children);
        });
      }
    };
  }, []);

  return (
    <article className="article-reader">
      <h1 className="article-reader__headline">{title}</h1>
      <TOC heading="TABLE OF CONTENTS" tableOfContents={tableOfContents} />
      {/* eslint-disable-next-line react/no-danger */}
      <div ref={handleRef} dangerouslySetInnerHTML={{ __html: html }} />
      <AuthorsList authors={authors} />
      <EditLink relativePath={relativePath} editPath={editPath} />
      <Pagination previous={previous} next={next} />
    </article>
  );
};

export default Article;
