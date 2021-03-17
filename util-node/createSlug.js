/* eslint-disable @typescript-eslint/explicit-function-return-type */
function createSlug(title) {
  let slug = title.toLowerCase().trim();

  const sets = [
    { to: 'nodejs', from: /node.js/ }, // Replace node.js
    { to: '-and-', from: /&/ }, // Replace &
    { to: '-', from: /[/_,:;\\ .]/g }, // Replace /_,:;\. and whitespace
  ];

  sets.forEach(set => {
    slug = slug.replace(set.from, set.to);
  });

  return (
    slug
      // eslint-disable-next-line no-useless-escape
      .replace(/[^\w\-]+/g, '') // Remove any non word characters
      .replace(/--+/g, '-') // Replace multiple hyphens with single
      .replace(/^-/, '') // Remove any leading hyphen
      .replace(/-$/, '')
  ); // Remove any trailing hyphen
}

module.exports = createSlug;
