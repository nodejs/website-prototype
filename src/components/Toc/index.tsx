import React from 'react';
import { fixTocCodeTag } from '../../util/tocFormatter';

interface Props {
  heading: string;
  tableOfContents?: string;
}

const TOC = ({ heading, tableOfContents }: Props): null | JSX.Element => {
  if (!tableOfContents) {
    return null;
  }
  const toc = fixTocCodeTag(tableOfContents);

  return (
    <details className="toc">
      <summary>
        <h6>{heading}</h6>
      </summary>
      {/* eslint-disable react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: toc }} />
    </details>
  );
};

export default TOC;
