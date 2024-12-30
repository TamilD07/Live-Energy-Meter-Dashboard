module.exports = {
    webpack: (config) => {
      config.resolve.fallback = {
        stream: require.resolve('stream-browserify'),
      };
      config.module.rules.push({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [
            [
              require.resolve('react-refresh/babel'),
              {
                skipEnvCheck: true,
              },
            ],
          ],
        },
      });
      return config;
    },
  };
  