/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
});

module.exports = nextConfig;
