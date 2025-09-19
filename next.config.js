const withPWA = require("next-pwa")({
    dest: "public", register: true, skipWaiting: true, fallbacks: {
        document: "/offline.html", // when offline
    },
});

module.exports = withPWA({
    reactStrictMode: true, assetPrefix: "", images: {
        unoptimized: true,
    }, devIndicators: {
        buildActivity: false,
    },
});

