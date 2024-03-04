/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      });
    }
    return headers;
  },
};

export default nextConfig;
