const withTM = require('next-transpile-modules')(['three'])

module.exports = withTM({
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
        });
        return config;
    },
    webpackDevMiddleware: (config) => {
        return config;
    },
    sassOptions: {
        includePaths: 'styles',
    },
    images: {
        domains: ['images.unsplash.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    }
});
