import { useState, useEffect } from 'react';

export function useReleaseHistory() {
  const releasesURL = 'https://nodejs.org/dist/index.json';
  const [releaseHistory, setReleaseHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(releasesURL).then(data => data.json());
      setReleaseHistory(result);
    };
    fetchData();
  }, []);

  return releaseHistory;
}
