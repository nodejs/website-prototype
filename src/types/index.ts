export interface HomepageData {
  page: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      displayTitle: string;
      subTitle: string;
      description: string;
      learnLinkText: string;
      beginnerGuideHeaderText: string;
      beginnerGuideBodyText: string;
      doMoreWithNodeHeaderText: string;
      doMoreWithNodeBodyText: string;
      nodeFeatureHeader1: string;
      nodeFeatureHeader2: string;
      nodeFeatureHeader3: string;
      nodeFeature1: string;
      nodeFeature2: string;
      nodeFeature3: string;
      nodeFeatureAltText: string;
    };
  };
}

export interface LearnPageContext {
  slug: string;
  relativePath: string;
  next: PaginationInfo;
  previous: PaginationInfo;
  navigationData: NavigationSectionData;
}

export interface LearnPageData {
  doc: {
    id: string;
    html: string;
    tableOfContents: string;
    frontmatter: { title: string; description: string };
    fields: { authors: string[] };
  };
}

export interface PaginationInfo {
  slug: string;
  title: string;
}

export interface NavigationSectionItem {
  slug: string;
  title: string;
  section: string;
}

export interface NavigationSectionData {
  [index: string]: NavigationSectionItem[];
}

/**
 * Payload on the `stickychange` custom event
 */
export interface StickyChange {
  stuck: boolean;
  target: HTMLElement;
}

export interface SentinelObserverSetupOptions {
  container: HTMLElement;
  stickyElementsClassName: string;
  root?: HTMLElement | null;
  headerRootMargin?: string;
  footerRootMargin?: string;
}

declare global {
  interface Window {
    previousPath: string;
  }
}

export interface Page {
  editPath?: string;
  data: {
    page: {
      html: string;
      tableOfContents: string;
      frontmatter: {
        title: string;
        description: string;
      };
      fields: { authors: string[] };
    };
  };
  location?: Location;
}
