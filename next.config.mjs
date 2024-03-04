/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const headers = [];
    // Condição para verificar se não é ambiente de produção
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
      // Remove a tag X-Robots-Tag dos cabeçalhos
      headers.push({
        source: '/:path*', // Ou você pode especificar a origem que deseja
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow', // Valor vazio para remover o cabeçalho
          },
        ],
      });
    }
    return headers;
  },
};

export default nextConfig;
