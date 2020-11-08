const sitemap = require('nextjs-sitemap-generator');
const withOffline = require('next-offline');

sitemap({
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: 'public/',
});

const basePath = process.env.NODE_ENV === 'production' ? '/p1ass-lt-site' : '';

module.exports = withOffline({
  basePath,
  env: {
    basePath,
  },
});
