import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const config = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: process.env.BIGCOMMERCE_CDN_HOSTNAME ?? '*.bigcommerce.com',
      port: '',
      pathname: '/**/*'
    }]
  },
  async redirects() {
    return [{
      source: '/password',
      destination: '/',
      permanent: true
    }];
  }
};
export default MillionLint.next({
  rsc: true
})(config);