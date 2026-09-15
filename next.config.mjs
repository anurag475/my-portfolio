/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — keeps this deployable to any static host (Netlify, GitHub
  // Pages, Cloudflare Pages, S3, etc.) with zero server required, matching the
  // "fast, static, no backend" nature of the original site. Forms still work
  // client-side via Netlify Forms / Formspree (see README).
  output: "export",
  images: {
    unoptimized: true, // static export can't use the Image Optimization API
  },
};

export default nextConfig;
