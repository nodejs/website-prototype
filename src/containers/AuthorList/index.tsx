import React from 'react';
import Author from '../../components/Author';
import './AuthorList.scss';

interface Props {
  authors: string[];
}

const AuthorsList = ({ authors }: Props): null | JSX.Element => {
  return (
    <ul className="list">
      <h5>Contributors</h5>
      {authors.map(
        (author, i): string | JSX.Element =>
          author && (
            <Author index={i} username={author} key={author} size="60" />
          )
      )}
    </ul>
  );
};

export default AuthorsList;
