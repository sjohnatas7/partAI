const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: !debug ? 'https://reconecto.com' : '',
  images: { unoptimized: true,  }
}


module.exports = nextConfig
