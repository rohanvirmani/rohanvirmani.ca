module.exports = {
  plugins: [
    {
      
        // resolve: "gatsby-plugin-decap-cms",
        // options: {
        //   modulePath: `${__dirname}/src/cms/cms.js`,
        // },
      

      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://rohanvirmani.ca", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Rohan Virmani", // Used in manifest.json
          shortName: "RV", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
  ],
};
