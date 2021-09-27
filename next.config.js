module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: "/es-US/:path*",
        destination: "/en-US/:path*",
        locale: false,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/es-US/:path*",
        destination: "/en-US/:path*",
        permanent: true,
        locale: false,
      },
    ];
  },
};
