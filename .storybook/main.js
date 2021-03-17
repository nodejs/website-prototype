// some config came from https://dev.to/romansorin/integrating-gatsby-tailwind-and-storybook-2cbi

module.exports = {
  stories: ['../stories/**/*.stories.js', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];
    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve('@babel/plugin-proposal-class-properties'),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve('babel-plugin-remove-graphql-queries'),
    ];
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],

          plugins: [
            require.resolve('@babel/plugin-proposal-class-properties'),
            // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
            require.resolve('babel-plugin-remove-graphql-queries'),
          ],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
