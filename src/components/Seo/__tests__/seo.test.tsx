import React from 'react';
import { render } from '@testing-library/react';
import SEO from '..';

describe('SEO component', () => {
  it('renders correctly', () => {
    const title = 'title-mock';
    const description = 'description-mock';
    const img = 'image-mock';
    const { container } = render(
      <SEO title={title} description={description} img={img} />
    );
    expect(container).toMatchSnapshot();
  });
  it('uses config properties as fallback for missing props', () => {
    const { container } = render(<SEO />);
    expect(container).toMatchSnapshot();
  });
});
