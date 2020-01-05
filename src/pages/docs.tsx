import React from 'react';
import { useApiData } from '../hooks';
import Hero from '../components/hero';
import Layout from '../components/layout';

export default () => {
  const title = 'API Docs';
  const description = 'Come learn yourself something.';
  const apiData = useApiData('v12.9.1');

  return (
    <Layout title={title} description={description}>
      <Hero title={title} />
      <article style={{ width: '100%' }} className="article-reader">
        <nav>
          <ul>
            {apiData.modules.map(module => (
              <li key={module.name}>{module.displayName}</li>
            ))}
          </ul>
        </nav>
        <p>Welcome to the API Page!</p>
      </article>
    </Layout>
  );
};
