/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useApiData, useReleaseHistory } from '../hooks';
import {
  ApiDocsObj,
  APIResponse,
  isMethodObj,
  isEventObj,
  isClassObj,
  isModuleObj,
} from '../hooks/useApiDocs';

import downloadUrlByOs from '../util/downloadUrlByOS';
import { detectOS, UserOS } from '../util/detectOS';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import ShellBox from '../components/ShellBox';

import '../styles/docs.scss';
import '../styles/article-reader.scss';

function renderArticleOverview(
  obj: ApiDocsObj,
  overview: JSX.Element[] = []
): JSX.Element[] {
  const children: JSX.Element[] = [];
  if (obj.events) {
    obj.events.map((evt): JSX.Element[] =>
      renderArticleOverview(evt, children)
    );
  }
  if (obj.methods) {
    obj.methods.map((method): JSX.Element[] =>
      renderArticleOverview(method, children)
    );
  }
  if (obj.properties) {
    obj.properties
      .filter((o): boolean => o.type !== 'Object')
      .map((prop): JSX.Element[] => renderArticleOverview(prop, children));

    obj.properties
      .filter((o): boolean => o.type === 'Object')
      .map((prop): JSX.Element[] => renderArticleOverview(prop, children));
  }
  if (obj.classes) {
    obj.classes.map((klass): JSX.Element[] =>
      renderArticleOverview(klass, children)
    );
  }

  overview.push(
    <li
      className={`api-key__item api-key__item--${obj.type} ${
        children.length ? 'api-key__item--has-children' : ''
      }`}
      key={obj.name}
    >
      <a href={`#${obj.name}`} className="t-body1">
        {obj.displayName || obj.name}
      </a>
      {children.length ? (
        <ul className="api-key__section">{children}</ul>
      ) : undefined}
    </li>
  );

  return overview;
}

function renderArticleSections(
  pages: ApiDocsObj[],
  sections: JSX.Element[] = [],
  depth = 0
): JSX.Element[] {
  /* eslint-disable-next-line no-restricted-syntax */
  for (const page of pages) {
    const children = [];

    if (depth === 0) {
      sections.push(<hr />);
      children.push(
        <h2 className={`api-docs__title api-docs__title--${page.type}`}>
          {page.displayName || page.name}
        </h2>
      );
    } else if (depth === 1) {
      children.push(
        <h3 className={`api-docs__title api-docs__title--${page.type}`}>
          {page.displayName || page.name}
        </h3>
      );
    } else if (depth === 2) {
      children.push(
        <h4 className={`api-docs__title api-docs__title--${page.type}`}>
          {page.displayName || page.name}
        </h4>
      );
    } else if (depth === 3) {
      children.push(
        <h5 className={`api-docs__title api-docs__title--${page.type}`}>
          {page.displayName || page.name}
        </h5>
      );
    } else if (depth === 4) {
      children.push(
        <h6 className={`api-docs__title api-docs__title--${page.type}`}>
          {page.displayName || page.name}
        </h6>
      );
    }

    if (isModuleObj(page)) {
      children.push(
        <li id={page.name}>
          Module: ({page.type}){' '}
          {page.desc && <p dangerouslySetInnerHTML={{ __html: page.desc }} />}
        </li>
      );
    } else if (isMethodObj(page)) {
      children.push(
        <li id={page.name}>
          Method: ({page.type}){' '}
          {page.desc && <p dangerouslySetInnerHTML={{ __html: page.desc }} />}
        </li>
      );
    } else if (isEventObj(page)) {
      children.push(
        <li id={page.name}>
          Event: ({page.type}){' '}
          {page.desc && <p dangerouslySetInnerHTML={{ __html: page.desc }} />}
        </li>
      );
    } else if (isClassObj(page)) {
      children.push(
        <li id={page.name}>
          Class: ({page.type}){' '}
          {page.desc && <p dangerouslySetInnerHTML={{ __html: page.desc }} />}
        </li>
      );
    } else {
      children.push(
        <li id={page.name}>
          Property: ({page.type}){' '}
          {page.desc && <p dangerouslySetInnerHTML={{ __html: page.desc }} />}
        </li>
      );
    }

    if (page.events) {
      renderArticleSections(page.events, children, depth + 1);
    }
    if (page.methods) {
      renderArticleSections(page.methods, children, depth + 1);
    }
    if (page.properties) {
      renderArticleSections(page.properties, children, depth + 1);
    }
    if (page.classes) {
      renderArticleSections(page.classes, children, depth + 1);
    }
    if (page.modules) {
      renderArticleSections(page.modules, children, depth + 1);
    }

    sections.push(<section className="api-docs__section">{children}</section>);
  }

  return sections;
}

function renderArticle(
  page: ApiDocsObj | null,
  userOS: UserOS,
  version: string
): JSX.Element {
  const sourceCodeLink = downloadUrlByOs(UserOS.UNIX, version);
  const prebuiltInstallerLink = downloadUrlByOs(userOS, version);

  if (!page) {
    return (
      <article className="article-reader">
        <p className="t-overline">
          <span>home</span>
          <span className="breadcrumb-separator">/</span>
          <span>documentation</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-active">installing node</span>
        </p>
        <h1>{version}</h1>
        <h2>Installing Node</h2>
        <p className="t-body1">
          The easiest way to install Node is by using a&nbsp;
          <a href={prebuiltInstallerLink} className="t-body1">
            pre-built installer
          </a>
          &nbsp;but you can also install via package manager using bash (below),
          or download the&nbsp;
          <a href={sourceCodeLink} className="t-body1">
            Node.js source code
          </a>
          . Official packages for all the major platforms are available&nbsp;
          <Link to="/download" className="t-body1">
            here
          </Link>
          .
        </p>
        <h3>Android</h3>
        <p className="t-body1">
          Android support is still experimental in Node.js, so precompiled
          binaries are not yet provided by Node.js developers.
        </p>
        <p className="t-body1">
          However, there are some third-party solutions. For example,{' '}
          <a href="https://termux.com/">Termux</a>
          &nbsp;community provides terminal emulator and Linux environment for
          Android, as well as own package manager and{' '}
          <a href="https://github.com/termux/termux-packages">
            extensive collection
          </a>
          &nbsp;of many precompiled applications. This command in Termux app
          will install the last available Node.js version:
        </p>
        <ShellBox textToCopy="pkg install nodejs">
          pkg&nbsp;
          <span className="function">install</span>
          &nbsp;nodejs
        </ShellBox>
        <h3>Arch Linux</h3>
        <p className="t-body1">
          Node.js and npm packages are available in the Community Repository.
        </p>
        <ShellBox textToCopy="pacman -S nodejs npm">
          pacman -S nodejs&nbsp;
          <span className="function">npm</span>
        </ShellBox>
        <h3>
          Debian and Ubuntu based Linux distributions, Enterprise Linux/Fedora
          and Snap packages
        </h3>
        <p className="t-body1">
          <a href="https://github.com/nodesource/distributions/blob/master/README.md">
            Node.js binary distributions
          </a>
          &nbsp;are available from NodeSource.
        </p>
        <h3>FreeBSD</h3>
        <p className="t-body1">
          The most recent release of Node.js is available via the&nbsp;
          <a href="https://www.freshports.org/www/node">www/node</a>
          &nbsp;port.
        </p>
        <ShellBox textToCopy="pkg install node">
          pkg&nbsp;
          <span className="function">install</span>
          &nbsp;node
        </ShellBox>
        <p className="t-body1">
          Or compile it on your own using&nbsp;
          <a href="https://www.freebsd.org/cgi/man.cgi?ports">ports:</a>
        </p>
        <ShellBox textToCopy="cd /usr/ports/www/node && make install">
          cd /usr/ports/www/node && make&nbsp;
          <span className="function">install</span>
        </ShellBox>
        <h3>Gentoo</h3>
        <p className="t-body1">Node.js is available in the portage tree.</p>
        <ShellBox textToCopy="emerge nodejs">emerge nodejs</ShellBox>
        <h3>IBM i</h3>
        <p className="t-body1">
          LTS versions of Node.js are available from IBM, and are available
          via&nbsp;
          <a href="https://ibm.biz/ibmi-rpms">
            the &apos;yum&apos; package manager
          </a>
          . The package name is <code>nodejs</code> followed by the major
          version number (for instance, <code>nodejs8</code>,{' '}
          <code>nodejs10</code>, <code>nodejs12</code>, etc)
        </p>
        <p className="t-body1">
          To install Node.js 12.x from the command line, run the following as a
          user with *ALLOBJ special authority:
        </p>
        <ShellBox textToCopy="yum install nodejs12">
          yum&nbsp;
          <span className="function">install</span>
          &nbsp;nodejs12
        </ShellBox>
        <p className="t-body1">
          Node.js can also be installed with the IBM i Access Client Solutions
          product. See this support document for more details
        </p>
        <h3>macOS</h3>
        <p className="t-body1">
          Download the&nbsp;
          <a href="https://nodejs.org/en/#home-downloadhead">macOS Installer</a>
          &nbsp;directly from the&nbsp;
          <a href="https://nodejs.org/">nodejs.org</a>
          &nbsp;web site.
        </p>
        <p className="t-body1">
          If you want to download the package with bash:
        </p>
        <ShellBox
          textToCopy={
            // eslint-disable-next-line no-template-curly-in-string
            'https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE \'s|.*>node-(.*)\\.pkg</a>.*|\\1|p\')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"'
          }
        >
          <span className="function">curl</span>
          &nbsp;
          {
            // eslint-disable-next-line no-template-curly-in-string
            'https://nodejs.org/dist/latest/node-${VERSION:-$('
          }
          <span className="function">wget</span>
          &nbsp;
          {
            '-qO- https://nodejs.org/dist/latest/ | sed -nE \'s|.*>node-(.*)\\.pkg</a>.*|\\1|p\')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"'
          }
        </ShellBox>
        <p className="t-body1">
          Node.js can also be installed with the IBM i Access Client Solutions
          product. See this support document for more details
        </p>
        <h4>Alternatives</h4>
        <p className="t-body1">
          Using <a href="https://brew.sh/">Homebrew</a>:
        </p>
        <ShellBox textToCopy="brew install node">
          brew&nbsp;
          <span className="function">install</span>
          &nbsp;node
        </ShellBox>
        <p className="t-body1">
          Using <a href="https://www.macports.org/">MacPorts</a>:
        </p>
        <ShellBox textToCopy="port install nodejs<major version>">
          port&nbsp;
          <span className="function">install</span>
          &nbsp;{'nodejs<major version>'}
        </ShellBox>
        <p className="t-body1">
          Using <a href="https://pkgsrc.joyent.com/install-on-osx/">pkgsrc</a>:
        </p>
        <p className="t-body1">Install the binary package:</p>
        <ShellBox textToCopy="pkgin -y install nodejs">
          pkgin -y&nbsp;
          <span className="function">install</span>
          &nbsp;nodejs
        </ShellBox>
        <p className="t-body1">Or build manually from pkgsrc:</p>
        <ShellBox textToCopy="cd pkgsrc/lang/nodejs && bmake install">
          cd pkgsrc/lang/nodejs && bmake&nbsp;
          <span className="function">install</span>
        </ShellBox>
        <h3>NetBSD</h3>
        <p className="t-body1">Node.js is available in the pkgsrc tree:</p>
        <ShellBox textToCopy="cd /usr/pkgsrc/lang/nodejs && make install">
          cd /usr/pkgsrc/lang/nodejs &&&nbsp;
          <span className="function">make install</span>
        </ShellBox>
        <p className="t-body1">
          Or install a binary package (if available for your platform) using
          pkgin:
        </p>
        <ShellBox textToCopy="pkgin -y install nodejs">
          pkgin -y&nbsp;
          <span className="function">install</span>
          &nbsp;nodejs
        </ShellBox>
        <h3>Nodenv</h3>
        <p className="t-body1">
          <code>nodenv</code> is a lightweight node version manager, similar
          to&nbsp;
          <code>nvm</code>. It&apos;s simple and predictable. A rich plugin
          ecosystem lets you tailor it to suit your needs. Use&nbsp;
          <code>nodenv</code> to pick a Node version for your application and
          guarantee that your development environment matches production.
        </p>
        <p className="t-body1">
          Nodenv installation instructions are maintained&nbsp;
          <a href="https://github.com/nodenv/nodenv#installation">
            on its Github page
          </a>
          . Please visit that page to ensure you&apos;re following the latest
          version of the installation steps.
        </p>
        <h3>nvm</h3>
        <p className="t-body1">
          Node Version Manager is a bash script used to manage multiple released
          Node.js versions. It allows you to perform operations like install,
          uninstall, switch version, etc. To install nvm, use this&nbsp;
          <a href="https://github.com/nvm-sh/nvm#install--update-script">
            install script
          </a>
          .
        </p>
        <p className="t-body1">
          On Unix / OS X systems Node.js built from source can be installed
          using&nbsp;<a href="https://github.com/creationix/nvm">nvm</a>&nbsp;by
          installing into the location that nvm expects:
        </p>
        <ShellBox
          textToCopy={
            'env VERSION=`python tools/getnodeversion.py` make install DESTDIR=`nvm_version_path v$VERSION` PREFIX=""'
          }
        >
          <span className="function">env</span>
          &nbsp;VERSION=`python tools/getnodeversion.py`
          <span className="function">&nbsp;make install&nbsp;</span>
          DESTDIR=`nvm_version_path v$VERSION` PREFIX=&quot;&quot;
        </ShellBox>
        <p className="t-body1">
          After this you can use <code>nvm</code> to switch between released
          versions and versions built from source. For example, if the version
          of Node.js is v8.0.0-pre:
        </p>
        <ShellBox textToCopy="nvm use 8">
          nvm use&nbsp;
          <span className="function">8</span>
        </ShellBox>
        <p className="t-body1">
          Once the official release is out you will want to uninstall the
          version built from source:
        </p>
        <ShellBox textToCopy="nvm uninstall 8">
          nvm uninstall&nbsp;
          <span className="function">8</span>
        </ShellBox>
        <h3>OpenBSD</h3>
        <p className="t-body1">
          Node.js is available through the ports system.
        </p>
        <ShellBox textToCopy="/usr/ports/lang/node">
          /usr/ports/lang/node
        </ShellBox>
        <p className="t-body1">
          Using&nbsp;
          <a href="https://man.openbsd.org/OpenBSD-current/man1/pkg_add.1">
            pkg_add
          </a>
          &nbsp;on OpenBSD:
        </p>
        <ShellBox textToCopy="pkg_add node">pkg_add node</ShellBox>
        <h3>openSUSE and SLE</h3>
        <p className="t-body1">
          Node.js is available in the main repositories under the following
          packages:
        </p>
        <ul>
          <li>
            <p className="t-body1">
              openSUSE Leap 42.2:&nbsp;
              <span>
                <code>nodejs4</code>
              </span>
            </p>
          </li>
          <li>
            <p className="t-body1">
              openSUSE Leap 42.3:&nbsp;
              <span>
                <code>nodejs4</code>,&nbsp;<code>nodejs6</code>
              </span>
            </p>
          </li>
          <li>
            <p className="t-body1">
              openSUSE Tumbleweed:&nbsp;
              <span>
                <code>nodejs10</code>,&nbsp;<code>nodejs12</code>,&nbsp;
                <code>nodejs14</code>
              </span>
            </p>
          </li>
          <li>
            <p className="t-body1">
              SUSE Linux Enterprise Server (SLES) 12:&nbsp;
              <span>
                <code>nodejs4</code>,&nbsp;<code>nodejs6</code>&nbsp;(The
                &quot;Web and Scripting Module&quot; must be&nbsp;
                <a href="https://www.suse.com/documentation/sles-12/book_sle_deployment/data/sec_add-ons_extensions.html">
                  added before installing
                </a>
                .)
              </span>
            </p>
          </li>
        </ul>
        <p className="t-body1">
          For example, to install Node.js 4.x on openSUSE Leap 42.2, run the
          following as root:
        </p>
        <ShellBox textToCopy="zypper install nodejs4">
          <span className="function">zypper</span>
          &nbsp;<span className="function">install</span>
          &nbsp;nodejs4
        </ShellBox>
        <h3>SmartOS and illumos</h3>
        <p className="t-body1">
          SmartOS images come with pkgsrc pre-installed. On other illumos
          distributions, first install pkgsrc, then you may install the binary
          package as normal:
        </p>
        <ShellBox textToCopy="pkgin -y install nodejs">
          pkgin -y&nbsp;
          <span className="function">install</span>
          &nbsp;nodejs
        </ShellBox>
        <p className="t-body1">Or build manually from pkgsrc:</p>
        <ShellBox textToCopy="cd pkgsrc/lang/nodejs && bmake install">
          cd pkgsrc/lang/nodejs && bmake&nbsp;
          <span className="function">install</span>
        </ShellBox>
        <h3>Solus</h3>
        <p className="t-body1">
          Solus provides Node.js in its main repository.
        </p>
        <ShellBox textToCopy="sudo eopkg install nodejs">
          <span className="function">sudo</span>
          &nbsp;eopkg&nbsp;
          <span className="function">install</span>
          &nbsp;nodejs
        </ShellBox>
        <h3>Void Linux</h3>
        <p className="t-body1">
          Void Linux ships Node.js stable in the main repository.
        </p>
        <ShellBox textToCopy="xbps-install -Sy nodejs">
          xbps-install -Sy nodejs
        </ShellBox>
        <h3>Windows</h3>
        <p className="t-body1">
          Download the&nbsp;
          <a href="https://nodejs.org/en/#home-downloadhead">
            Windows Installer
          </a>
          &nbsp; directly from the <a href="https://nodejs.org/">nodejs.org</a>{' '}
          web site.
        </p>
        <h4>Alternatives</h4>
        <p className="t-body1">
          Using <a href="https://chocolatey.org/">Chocolatey</a>:
        </p>
        <ShellBox textToCopy="cinst nodejs">cinst nodejs</ShellBox>
        <p className="t-body1">or for full install with npm</p>
        <ShellBox textToCopy="cinst nodejs.install">
          cinst nodejs.install
        </ShellBox>
        <p className="t-body1">
          Using <a href="https://scoop.sh/">Scoop</a>:
        </p>
        <ShellBox textToCopy="scoop install nodejs">
          scoop&nbsp;
          <span className="function">install</span>
          &nbsp;nodejs
        </ShellBox>
      </article>
    );
  }

  return (
    <article style={{ width: '100%' }} className="article-reader">
      <h1>{page.displayName || page.name}</h1>
      <ul className="api-key">
        {renderArticleOverview(page)}
        {page.modules &&
          page.modules.map((mod): JSX.Element[] =>
            renderArticleOverview(mod, [])
          )}
      </ul>
      {page.desc && <p dangerouslySetInnerHTML={{ __html: page.desc }} />}
      {renderArticleSections([page])}
    </article>
  );
}

function sideBarSection(
  title: string,
  section: keyof APIResponse,
  data: APIResponse,
  setPage: Function
): JSX.Element {
  return (
    <li className="api-nav__list-item">
      <h2 className="t-body2 api-nav__list-title">
        <i className="material-icons">offline_bolt</i>
        {title}
      </h2>
      <ul className="api-nav__sub-list">
        {(data[section] as ApiDocsObj[]).map(
          (module: ApiDocsObj): JSX.Element => (
            <li key={module.name} className="api-nav__sub-list-item">
              <a
                href={`#temporary_path_for_${module.name}`}
                onClick={(): void => setPage(module)}
                className="t-body2 api-nav__sub-list-link"
              >
                {module.displayName || module.name}
              </a>
            </li>
          )
        )}
      </ul>
    </li>
  );
}

export default function APIDocsPage(): JSX.Element {
  const title = 'API Docs';
  const description = 'Come learn yourself something.';
  const userOS = detectOS();
  const [version, setVersion] = useState<string | null>(null);
  const [page, setPage] = useState<ApiDocsObj | null>(null);

  // Magical function filters out all major versions less than 6.
  // TODO: Remove the magical number for the major version. Fet from dynamic releases data to filter out EOL'd versions.
  const releases = useReleaseHistory().filter(
    (r): boolean => parseInt(r.version.slice(1), 10) >= 6
  );

  const currentVersionSelected =
    version || (releases[0] && releases[0].version) || null;

  const apiData = useApiData(currentVersionSelected);

  return (
    <>
      <main>
        <Layout title={title} description={description} showFooter={false}>
          <nav className="api-nav">
            <ul className="api-nav__list">
              <li className="api-nav__list-item">
                <select
                  className="api-nav__version"
                  onChange={(e): void => {
                    setPage(null);
                    setVersion(e.target.value);
                  }}
                >
                  {releases.map(
                    (release): JSX.Element => (
                      <option value={release.version} key={release.version}>
                        {release.version}
                      </option>
                    )
                  )}
                </select>
              </li>
              {sideBarSection('Globals', 'globals', apiData, setPage)}
              {sideBarSection('Methods', 'methods', apiData, setPage)}
              {sideBarSection('Misc', 'miscs', apiData, setPage)}
              {sideBarSection('Modules', 'modules', apiData, setPage)}
              {sideBarSection('Classes', 'classes', apiData, setPage)}
            </ul>
          </nav>
          {renderArticle(page, userOS, currentVersionSelected || '')}
        </Layout>
      </main>
      <Footer />
    </>
  );
}
