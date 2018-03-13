
module.exports = function (api) {
  api.register('modifyAFWebpackOpts', ({ memo }) => {
    memo.urlLoaderExcludes = [
      ...(memo.urlLoaderExcludes || []),
      /\.atpl$/,
    ];
    return memo;
  });
  api.register('modifyWebpackConfig', ({ memo }) => {
    memo.module.rules.push({
      test: /\.atpl$/i,
      use: [
        {
          loader: require.resolve('atpl-loader'),
        },
      ],
    });
    return memo;
  });
}
