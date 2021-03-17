import React from 'react';
import '../styles/layout.scss';

const StyleGuidePage = (): JSX.Element => {
  return (
    <main style={{ maxWidth: `940px`, margin: `0 auto` }}>
      <div className="t-display1">Display1</div>
      <div className="t-display2">Display2</div>
      <div className="t-display3">Display3</div>
      <div className="t-headline">Headline</div>
      <div className="t-subheading">Subheading</div>
      <div className="t-body1">Body1</div>
      <div className="t-body2">Body2</div>
      <div className="t-caption">Caption</div>
      <div className="t-overline">Overline</div>

      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <p>
        Open Sans is a humanist sans serif typeface designed by Steve Matteson,
        Type Director of Ascender Corp. This version contains the complete 897
        character set, which includes the standard ISO Latin 1, Latin CE, Greek
        and Cyrillic character sets. Open Sans was designed with an upright
        stress, open forms and a neutral, yet friendly appearance. It was
        optimized for print, web, and mobile interfaces, and has excellent
        legibility characteristics in its letterforms.
      </p>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">This is a link</a>
    </main>
  );
};

export default StyleGuidePage;
