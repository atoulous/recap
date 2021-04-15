module.exports = {
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
};