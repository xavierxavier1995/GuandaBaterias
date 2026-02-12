/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.guandabaterias.com.br' },
      { protocol: 'https', hostname: 'cdn.gabrielxavier.online' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'instagram.fbau6-1.fna.fbcdn.net' }
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://esm.sh; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://www.guandabaterias.com.br https://cdn.gabrielxavier.online https://images.unsplash.com https://picsum.photos https://instagram.fbau6-1.fna.fbcdn.net https://*.google.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://generativelanguage.googleapis.com; frame-src 'self' https://www.google.com https://forms.lahar.com.br;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;