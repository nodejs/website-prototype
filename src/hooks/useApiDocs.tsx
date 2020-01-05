import { useState, useEffect } from 'react';

// TODO: Flesh out API types.
/* tslint:disable */
interface APIResponse {
  classes: any[];
  globals: any[];
  methods: any[];
  miscs: any[];
  modules: any[];
}
/* tslint:enable */

export function useApiData(version: string): APIResponse {
  const [apiData, setApiData] = useState<APIResponse>({
    classes: [],
    globals: [],
    methods: [],
    miscs: [],
    modules: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await window.fetch(
        `https://nodejs.org/dist/${version}/docs/api/all.json`
      );
      setApiData((await res.json()) as APIResponse);
    };
    fetchData();
  }, []);

  return apiData;
}
