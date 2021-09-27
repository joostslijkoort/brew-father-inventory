require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "BrewFather Inventory",
  },
  plugins: [
    "gatsby-plugin-styled-components",
  ],
};
