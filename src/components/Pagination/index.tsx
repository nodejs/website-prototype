import { Link } from 'gatsby';
import React from 'react';
import { PaginationInfo } from '../../types';
import './Pagination.scss';

interface Props {
  previous?: PaginationInfo;
  next?: PaginationInfo;
}

const Pagination = ({ previous, next }: Props): JSX.Element | null => {
  if (!previous && !next) return null;

  return (
    <ul className="pagination">
      <li>
        {previous && previous.title && (
          <Link className="link" to={`/learn/${previous.slug}`} rel="prev">
            ← &nbsp; Prev
          </Link>
        )}
      </li>
      <li>
        {next && next.title && (
          <Link className="link" to={`/learn/${next.slug}`} rel="next">
            Next &nbsp; →
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
