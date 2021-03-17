import { useState, useEffect } from 'react';

export interface ReleaseData {
  date: string;
  version: string;
  files: string[];
  lts: boolean;
  v8: string;
  npm?: string;
  modules?: string;
  openssl?: string;
  security?: boolean;
  uv?: string;
  zlib?: string;
}

export interface NodeReleaseData {
  release: string;
  status: string;
  codename: string;
  initialRelease: string;
  activeLTSStart: string;
  maintenanceLTSStart: string;
  endOfLife: string;
}

export function useReleaseHistory(): ReleaseData[] {
  const releasesURL = 'https://nodejs.org/dist/index.json';
  const [releaseHistory, setReleaseHistory] = useState<ReleaseData[]>([]);
  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      const result = await fetch(releasesURL).then(
        (data): Promise<ReleaseData[]> => data.json()
      );
      setReleaseHistory(result);
    };
    fetchData();
  }, []);

  return releaseHistory;
}

export function getStaticReleaseData(): NodeReleaseData[] {
  return [
    {
      release: 'v10',
      status: 'Maintenance LTS',
      codename: 'Dubnium',
      initialRelease: '2018-04-24',
      activeLTSStart: '2018-10-30',
      maintenanceLTSStart: '2020-05-19',
      endOfLife: '2021-04-30',
    },
    {
      release: 'v12',
      status: 'Active LTS',
      codename: 'Erbium',
      initialRelease: '2019-04-23',
      activeLTSStart: '2019-10-21',
      maintenanceLTSStart: '2020-10-20',
      endOfLife: '2022-04-30',
    },
    {
      release: 'v14',
      status: 'Active LTS',
      codename: 'Fermium',
      initialRelease: '2020-04-21',
      activeLTSStart: '2020-10-27',
      maintenanceLTSStart: '2021-10-19',
      endOfLife: '2023-04-30',
    },
    {
      release: 'v15',
      status: 'Curent',
      codename: '',
      initialRelease: '2020-10-20',
      activeLTSStart: '',
      maintenanceLTSStart: '2021-04-01',
      endOfLife: '2021-06-01',
    },
    {
      release: 'v16',
      status: 'Pending',
      codename: '',
      initialRelease: '2021-04-20',
      activeLTSStart: '2021-10-26',
      maintenanceLTSStart: '2022-10-18',
      endOfLife: '2024-04-30',
    },
  ];
}
