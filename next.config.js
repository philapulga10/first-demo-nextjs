const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

// module.exports = withImages(withSass());

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        }
      }
    )

    return config;
  }
}