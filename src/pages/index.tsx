import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';

export default () => {
  const title = 'Home Page';
  const description = 'Welcome to Node.js!';

  return (
    <Layout title={title} description={description}>
      <Hero title={title} />
      <article style={{ width: '100%' }} className="article-reader">
        <p>Welcome to the Home Page!</p>
      </article>
    </Layout>
  );
};
