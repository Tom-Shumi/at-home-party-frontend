/** @type {import('next').NextConfig} */
module.exports = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_SERVER: process.env.NEXT_PUBLIC_API_SERVER,
  },
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'],
  },
}
