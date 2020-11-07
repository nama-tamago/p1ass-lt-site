const sitemap = require('nextjs-sitemap-generator');
const withOffline = require('next-offline');

sitemap({
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: 'public/',
});

module.exports = withOffline({
  basePath: process.env.NODE_ENV === 'production' ? '/p1ass-lt-site' : '',
});
