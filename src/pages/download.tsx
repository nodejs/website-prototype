import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';

export default () => {
  const title = 'Download Node.js';
  const description = 'Come get me!';

  return (
    <Layout title={title} description={description}>
      <Hero title={title} />
      <article style={{ width: '100%' }} className="article-reader">
        <p>Welcome to the Downloads Page!</p>
      </article>
    </Layout>
  );
};
