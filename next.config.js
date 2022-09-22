// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/snippet-blog/" : "",
  images: {
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
  },
};
