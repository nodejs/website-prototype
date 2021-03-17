import React from 'react';
import EditLink from '../src/components/EditLink';
import '../src/styles/tokens.scss';
import '../src/styles/layout.scss';
import '../src/styles/mobile.scss';

export default {
  title: 'EditLink',
  component: EditLink,
};
export const root = (): JSX.Element => <EditLink relativePath="/" />;
