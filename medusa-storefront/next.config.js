const { withStoreConfig } = require("./store-config");
const store = require("./store.config.json");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
    features: store.features,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL.split("://")[0] || "http",
                hostname: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL.split("://")[1] || "localhost"
            },
        ],
    },
});

module.exports = nextConfig;
console.log("next.config.js", JSON.stringify(module.exports, null, 2));
