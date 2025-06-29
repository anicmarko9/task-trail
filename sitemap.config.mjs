// eslint-disable-next-line import/no-anonymous-default-export
export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  sitemapSize: 1000,
  exclude: ["/sitemap-0.xml"],
};
