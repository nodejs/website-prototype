export type ReleaseTypes = 'current' | 'lts' | 'maintenance' | 'endoflife';

export type UpcomingRelease = {
  releaseDate: string;
  releaseType: ReleaseTypes;
  alreadyReleased: boolean;
};

export const RELEASE_TYPES: { [key in ReleaseTypes]: string } = {
  current: 'Current',
  lts: 'LTS',
  maintenance: 'Maintenance Release',
  endoflife: 'End-of-life Release',
};

export const NODE_12_RELEASES: UpcomingRelease[] = [
  {
    alreadyReleased: true,
    releaseDate: '2019-04-23',
    releaseType: 'current',
  },
  {
    alreadyReleased: true,
    releaseDate: '2019-10-21',
    releaseType: 'lts',
  },
  {
    alreadyReleased: true,
    releaseDate: '2020-10-20',
    releaseType: 'maintenance',
  },
  {
    alreadyReleased: false,
    releaseDate: '2022-04-30',
    releaseType: 'endoflife',
  },
];

export const NODE_13_RELEASES: UpcomingRelease[] = [
  {
    alreadyReleased: true,
    releaseDate: '2019-10-22',
    releaseType: 'current',
  },
  {
    alreadyReleased: true,
    releaseDate: '2020-04-01',
    releaseType: 'maintenance',
  },
  {
    alreadyReleased: true,
    releaseDate: '2020-06-01',
    releaseType: 'endoflife',
  },
];

export const NODE_14_RELEASES: UpcomingRelease[] = [
  {
    alreadyReleased: true,
    releaseDate: '2020-04-21',
    releaseType: 'current',
  },
  {
    alreadyReleased: true,
    releaseDate: '2020-10-20',
    releaseType: 'lts',
  },
  {
    alreadyReleased: false,
    releaseDate: '2021-10-19',
    releaseType: 'maintenance',
  },
  {
    alreadyReleased: false,
    releaseDate: '2023-04-30',
    releaseType: 'endoflife',
  },
];

export const NODE_15_RELEASES: UpcomingRelease[] = [
  {
    alreadyReleased: true,
    releaseDate: '2020-10-21',
    releaseType: 'current',
  },
  {
    alreadyReleased: false,
    releaseDate: '2021-04-01',
    releaseType: 'maintenance',
  },
  {
    alreadyReleased: false,
    releaseDate: '2021-06-01',
    releaseType: 'endoflife',
  },
];
