import React from 'react';
import './ImageFigure.scss';

interface Props {
  caption: string;
  src: string;
  alt: string;
  target: '_blank' | '_self' | '_parent' | '_top';
}

const ImageFigure = ({
  caption,
  src,
  alt,
  target = '_blank',
}: Props): null | JSX.Element => {
  return (
    <figure>
      <a href={src} target={target} rel="noopener noreferrer">
        <img className="figure__image" src={src} alt={alt} />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default ImageFigure;
