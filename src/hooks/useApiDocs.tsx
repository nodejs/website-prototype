import { useState, useEffect } from 'react';

export interface ApiDocsMeta {
  added: string[];
  changes: string[];
}
export interface ApiDocsBase {
  type: string;
  name: string;
  textRaw: string;
  displayName?: string;
  desc?: string;
  meta?: ApiDocsMeta;
  introduced_in?: string;
  modules?: ApiDocsModule[];
  events?: ApiDocsEvent[];
  methods?: ApiDocsMethod[];
  classes?: ApiDocsClass[];
  properties?: ApiDocsProp[];
  miscs?: ApiDocsMiscs[];
}

export interface ApiDocsMiscs extends ApiDocsBase {
  type: 'misc';
}

export interface ApiDocsMethod extends ApiDocsBase {
  type: 'method';
  signatures: ApiDocsSignature[];
}

export function isMethodObj(obj: ApiDocsObj): obj is ApiDocsMethod {
  return obj.type === 'method';
}

export interface ApiDocsSignature extends ApiDocsBase {
  params: ApiDocsProp[];
}

export interface ApiDocsEvent extends ApiDocsBase {
  type: 'event';
}
export function isEventObj(obj: ApiDocsObj): obj is ApiDocsClass {
  return obj.type === 'event';
}

export interface ApiDocsClass extends ApiDocsBase {
  type: 'class';
  signatures: ApiDocsSignature[];
}

export function isClassObj(obj: ApiDocsObj): obj is ApiDocsClass {
  return obj.type === 'class';
}

export interface ApiDocsProp extends ApiDocsBase {
  type: string;
}

export interface ApiDocsModule extends ApiDocsBase {
  type: 'module';
  stability: number;
  stabilityText: string;
}

export function isModuleObj(obj: ApiDocsObj): obj is ApiDocsModule {
  return obj.type === 'module';
}

export interface APIResponse {
  classes: ApiDocsClass[];
  globals: ApiDocsProp[];
  methods: ApiDocsMethod[];
  miscs: ApiDocsMiscs[];
  modules: ApiDocsModule[];
}

export type ApiDocsObj =
  | ApiDocsMiscs
  | ApiDocsMethod
  | ApiDocsSignature
  | ApiDocsClass
  | ApiDocsProp
  | ApiDocsModule;

export function useApiData(version: string | null): APIResponse {
  const [apiData, setApiData] = useState<APIResponse>({
    classes: [],
    globals: [],
    methods: [],
    miscs: [],
    modules: [],
  });

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      const res = await window.fetch(
        `https://nodejs.org/dist/${version}/docs/api/all.json`
      );
      setApiData((await res.json()) as APIResponse);
    };
    if (version) {
      fetchData();
    }
  }, [version]);

  return apiData;
}
