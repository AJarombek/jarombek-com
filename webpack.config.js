/**
 * The webpack configuration
 * @author Andrew Jarombek
 * @since 3/20/2018
 */

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const webpack = require("webpack");
const NodemonPlugin = require("nodemon-webpack-plugin");

const parts = require("./webpack.parts");

// Define paths for the entry point of the app and the output directory
const PATHS = {
    client: path.join(__dirname, 'src/client/index.js'),
    clientBuild: path.join(__dirname, 'dist/client/'),
    server: path.join(__dirname, 'src/server/server.js'),
    serverBuild: path.join(__dirname, 'dist/server/')
};

const PUBLIC_PATH = (process.env.NODE_ENV === 'production') ?
    'https://jarombek.com/' :
    'http://localhost:8080/';

/**
 * Configuration specific to the Server bundles
 */
const serverConfig = merge([
    {
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
    },
    parts.loadFonts({
        options: {
            name: '[name].[ext]'
        }
    })
]);

/**
 * Configuration specific to the server bundles in a development environment
 */
const serverDevConfig = merge([
    {
        plugins: [
            new NodemonPlugin(),
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'development'
            })
        ]
    },
    parts.loadServerSass(),
    parts.loadImages()
]);

/**
 * Configuration specific to the server bundles in a production environment
 */
const serverProdConfig = merge([
    parts.extractCSS({
        use: ["css-loader", "sass-loader"],
        fallback: "isomorphic-style-loader"
    }),
    parts.loadImages({
        options: {
            limit: 15000, // Inline an image in the JavaScript bundle if it is sized less than 15kB
            name: '[name].[ext]'
        }
    })
]);

/**
 * Configuration specific to the client bundles
 */
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

/**
 * Configuration specific to the client bundles in a development environment
 */
const clientDevConfig = merge([
    {
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'development'
            })
        ],
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

/**
 * Configuration specific to the client bundles in a production environment
 */
const clientProdConfig = merge([
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
    parts.extractCSS({
        use: ["css-loader", "sass-loader"],
        fallback: "style-loader"
    }),
    parts.loadImages({
        options: {
            limit: 15000, // Inline an image in the JavaScript bundle if it is sized less than 15kB
            name: 'server/[name].[ext]',
            publicPath: PUBLIC_PATH
        }
    })
]);

module.exports = (env) => {
    if (env === "clientProduction") {
        return merge(clientConfig, clientProdConfig);
    } else if (env === "serverProduction") {
        return merge(serverConfig, serverProdConfig);
    } else if (env === "clientDevelopment") {
        return merge(clientConfig, clientDevConfig);
    } else {
        return merge(serverConfig, serverDevConfig);
    }
};