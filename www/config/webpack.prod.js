const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonConfig = require('./webpack.common.js');
const paths = require('./paths.js');

if (process.env.NODE_ENV === 'analyzer') {
    commonConfig.plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
        })
    )
}

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    optimization: {
        minimize: true
    },
    output: {
        path: paths.distSrc,
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    plugins: [
    ]
});