import React from 'react';
import './EditLink.scss';

interface Props {
  relativePath?: string;
  editPath?: string;
}

const EditLink = ({ relativePath, editPath }: Props): JSX.Element | null => {
  if (!relativePath && !editPath) return null;

  const baseURL = `https://github.com/nodejs/nodejs.dev/edit/master`;
  const href = relativePath
    ? `${baseURL}/src/documentation/${relativePath}`
    : `${baseURL}/${editPath}`;

  return (
    <div className="edit">
      <a className="link" href={href}>
        <span>Edit this page on GitHub</span>{' '}
        <svg
          className="icon"
          fill="currentColor"
          height="1em"
          width="1em"
          viewBox="0 0 40 40"
        >
          <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" />
        </svg>
      </a>
    </div>
  );
};

export default EditLink;
