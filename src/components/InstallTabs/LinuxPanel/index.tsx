import React from 'react';
import ShellBox from '../../ShellBox';
import '../InstallTabs.scss';

const LinuxPanel = (): JSX.Element => {
  return (
    <div>
      <ShellBox
        textToCopy="apk add -U curl
bash ca-certificates openssl ncurses coreutils python2 make gcc
g++ libgcc linux-headers grep util-linux binutils findutils"
      >
        <span className="install__text__no-select">$</span>
        <span className="install__text__command">apk add -U</span> curl bash
        ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc
        linux-headers grep util-linux binutils findutils
      </ShellBox>
      <ShellBox textToCopy="curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash">
        <span className="install__text__no-select">$</span>
        <span className="install__text__command"> curl -o- </span>
        https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh{' '}
        <span className="install__text__command">| bash</span>
      </ShellBox>
      <ShellBox textToCopy="nvm install --lts">
        <span className="install__text__no-select">$</span>
        <span className="install__text__command"> nvm</span> install --lts
      </ShellBox>
      <br />
      <br />
      {/* TODO when the new docs page is ready link to that page.  */}
      <a
        className="install__docs-button"
        href="https://nodejs.org/en/download/package-manager/#nvm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read documentation
      </a>
    </div>
  );
};

export default LinuxPanel;
