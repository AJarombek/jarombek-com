/**
 * The webpack configuration
 * @author Andrew Jarombek
 * @since 3/20/2018
 */

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const NodemonPlugin = require("nodemon-webpack-plugin");

const parts = require("./webpack.parts");

// Define paths for the entry point of the app and the output directory
const PATHS = {
    client: path.join(__dirname, 'src/client/index.js'),
    clientBuild: path.join(__dirname, 'dist/client/index.js'),
    server: path.join(__dirname, 'src/server/server'),
    serverBuild: path.join(__dirname, 'dist/server/server')
};

const serverConfig = {
    entry: {
        bundle: PATHS.server
    },
    output: {
        path: PATHS.serverBuild,
        filename: '[name].js'
    },
    target: "node",
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true
                }
            }
        ]
    }
};

const serverDevConfig = {
    plugins: [
        new NodemonPlugin()
    ]
};

const clientConfig = merge([
    {
        entry: {
            bundle: PATHS.client
        },
        output: {
            path: PATHS.clientBuild,
            filename: "[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: "html-loader"
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/client/index.html",
                filename: "./index.html"
            })
        ]
    },
    parts.lintJavaScript({ options: {emitWarning: true}}),
    parts.loadFonts({
        options: {
            name: '[name].[ext]'
        }
    })
]);

const productionConfig = merge([
    {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'initial'
                    }
                }
            }
        }
    },
    parts.generateSourceMaps({ type: 'source-map' }),
    parts.extractCSS({ use: ["css-loader", "sass-loader"]}),
    parts.loadImages({
        options: {
            limit: 15000, // Inline an image in the JavaScript bundle if it is sized less than 15kB
            name: '[name].[ext]'
        }
    })
]);

const developmentConfig = merge([
    {
        performance: {hints: false},
        output: {
            sourceMapFilename: "[name].map"
        }
    },
    parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
    }),
    parts.hotModuleReplacement(),
    parts.loadSass(),
    parts.loadImages()
]);

module.exports = (env) => {
    if (env === "clientProduction") {
        return merge(clientConfig, productionConfig);
    } else if (env === "serverProduction") {
        return merge(serverConfig);
    } else if (env === "clientDevelopment") {
        return merge(clientConfig, developmentConfig);
    } else {
        return merge(serverConfig, serverDevConfig);
    }
};