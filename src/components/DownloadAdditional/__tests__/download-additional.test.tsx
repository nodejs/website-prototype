import React from 'react';
import { render } from '@testing-library/react';
import DownloadAdditional from '..';

describe('DownloadAdditional component', (): void => {
  it('renders correctly', (): void => {
    const { container } = render(
      <DownloadAdditional
        selectedTypeRelease="LTS"
        handleTypeReleaseToggle={(): null => null}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
