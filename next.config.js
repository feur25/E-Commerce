/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
});
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],
  },
};
module.exports = nextConfig;