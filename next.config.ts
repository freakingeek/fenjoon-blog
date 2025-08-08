import createMdx from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "tsx"],
  experimental: {
    mdxRs: true,
    viewTransition: true,
  },
};

const withMdx = createMdx({});

export default withMdx(nextConfig);
