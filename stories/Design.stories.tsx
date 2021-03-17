import React from 'react';
import { tokens } from './colors';
import '../src/styles/tokens.scss';
import '../src/styles/layout.scss';
import '../src/styles/mobile.scss';
import Color from 'color';
import colorString from 'color-string';

export default {
  title: 'Design',
};

const divStyles = {
  display: 'flex',
  marginBottom: 16,
  padding: '0 16px',
  background: 'var(--info1)',
};

export const TextStyles = (): JSX.Element => (
  <div>
    <div style={divStyles}>
      <div className="t-display1">.t-display1 Text</div>
    </div>
    <div style={divStyles}>
      <div className="t-display2">.t-display2 Text</div>
    </div>
    <div style={divStyles}>
      <div className="t-display3">.t-display3 Text</div>
    </div>
    <div style={divStyles}>
      <div className="t-headline">.t-headline Text</div>
    </div>
    <div style={divStyles}>
      <div className="t-subheading">.t-subheading Text</div>
    </div>
    <div style={divStyles}>
      <div className="t-body1">.t-body1 Text</div>
    </div>
    <div style={divStyles}>
      <div className="t-body2">.t-body2 Text</div>
    </div>
    <div style={divStyles}>
      <div className="t-caption">.t-caption Text</div>
    </div>
    <div style={divStyles}>
      <div className="t-overline">.t-overline Text</div>
    </div>
    <a className="t-link">.t-link Link</a>
  </div>
);

export const Colors = () => {
  const colorSquares = Object.keys(tokens).map(key => {
    const bgIsDark = Color(colorString.get.rgb(tokens[key])).isDark();

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: 300,
          height: 100,
          backgroundColor: tokens[key],
        }}
      >
        <div
          style={{
            color: bgIsDark ? 'white' : 'black',
            margin: '0px 10px',
            padding: '0px 10px',
          }}
        >
          <div style={{ justifyContent: 'space-between' }}>
            <span>{key}</span> <span>{tokens[key].toUpperCase()}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div style={{ paddingTop: 20, display: 'flex', flexWrap: 'wrap' }}>
      {colorSquares}
    </div>
  );
};
