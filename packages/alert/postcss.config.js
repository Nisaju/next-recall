module.exports = {
  plugins: [
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
          discardDuplicates: {},
          cssDeclarationSorter: {},
          colormin: {},
        },
      ],
    }),
  ],
};
