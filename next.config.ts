import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
};

export default withContentlayer(nextConfig);
