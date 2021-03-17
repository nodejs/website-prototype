type Link = {
  path: string;
  label: string;
};

export type Downloadable = {
  name: string;
  links: Link[];
};

export const getDownloadableItemsList = (fileName: string): Downloadable[] => {
  const versionPrefix = `latest-${fileName.split('.')[0]}.x`;
  return [
    {
      name: 'Windows Installer (.msi)',
      links: [
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-x86.msi`,
          label: '32-bit',
        },
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-x64.msi`,
          label: '64-bit',
        },
      ],
    },
    {
      name: 'Windows Binary (.zip)',
      links: [
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-win-x86.zip`,
          label: '32-bit',
        },
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-win-x64.zip`,
          label: '64-bit',
        },
      ],
    },
    {
      name: 'macOS Installer (.pkg)',
      links: [
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}.pkg`,
          label: '64-bit',
        },
      ],
    },
    {
      name: 'macOS Binary (.tar.gz)',
      links: [
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-darwin-x64.tar.gz`,
          label: '64-bit',
        },
      ],
    },
    {
      name: 'Linux (PPC, S390x, AIX, ARMv7, ARMv8)',
      links: [
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-linux-x64.tar.xz`,
          label: '64-bit',
        },
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-linux-ppc64le.tar.xz`,
          label: 'ppc-le-64-bit',
        },
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-linux-s390x.tar.xz`,
          label: 's390x-64-bit',
        },
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-aix-ppc64.tar.gz`,
          label: 'aix-64-bit',
        },
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-linux-armv7l.tar.xz`,
          label: 'armv7-32-bit',
        },
        {
          path: `https://nodejs.org/dist/${versionPrefix}/node-${fileName}-linux-arm64.tar.xz`,
          label: 'armv8-64-bit',
        },
      ],
    },
  ];
};
