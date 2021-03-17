import createSlug from '../../util-node/createSlug';

describe('Tests for createSlug', () => {
  it('generates a slug', () => {
    const slugs = [
      'How to install Node.js',
      'The V8 JavaScript Engine',
      'The package.json guide',
      'Node.js & something.',
      '/usr/local/nodejs/bin',
      'a_b_c',
      'a, b and c',
      'title: subtitle',
      'a; b',
      'C:\\Program Files\\nodejs',
      'a---b',
    ].map(createSlug);
    expect(slugs).toEqual([
      'how-to-install-nodejs',
      'the-v8-javascript-engine',
      'the-package-json-guide',
      'nodejs-and-something',
      'usr-local-nodejs-bin',
      'a-b-c',
      'a-b-and-c',
      'title-subtitle',
      'a-b',
      'c-program-files-nodejs',
      'a-b',
    ]);
  });
});
