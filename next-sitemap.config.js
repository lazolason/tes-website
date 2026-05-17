/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mexelenergysustain.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
