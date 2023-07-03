/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.modules.push(__dirname);
      return config;
    },
    images: {
      domains: ['e-cdns-images.dzcdn.net' , 'tailwindui.com' , 'api.deezer.com' , 'upload.wikimedia.org'],
      dangerouslyAllowSVG : true
    },
  };
  
module.exports = nextConfig
