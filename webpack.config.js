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
const CopyWebpackPlugin = require("copy-webpack-plugin");

const parts = require("./webpack.parts");

// Define paths for the entry point of the app and the output directory
const PATHS = {
    client: path.join(__dirname, 'src/client/index.js'),
    clientBuild: path.join(__dirname, 'dist/client/'),
    server: path.join(__dirname, 'src/server/server.js'),
    serverBuild: path.join(__dirname, 'dist/server/')
};

const PUBLIC_PATH = (process.env.NODE_ENV === 'development') ?
    'http://localhost:8080/' :
    'https://jarombek.com/';

const ENV = (process.env.NODE_ENV === 'development') ?
    JSON.stringify('development') :
    JSON.stringify('production');

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
                },
                {
                    test: /\.md$/,
                    loader: "ignore-loader"
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                { from: path.join(__dirname, '/src/server/sitemap.xml'), to: 'sitemap.xml' }
            ]),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': ENV
            })
        ]
    },
    parts.loadFonts({
        options: {
            name: 'assets/[name].[ext]',
            publicPath: PUBLIC_PATH
        }
    })
]);

/**
 * Configuration specific to the server bundles in a development environment
 */
const serverDevConfig = merge([
    {
        plugins: [
            new NodemonPlugin()
        ]
    },
    parts.extractCSS({
        useSass: ["css-loader", "sass-loader"],
        useCss: ["css-loader"],
        fallback: "isomorphic-style-loader"
    }),
    parts.loadImages()
]);

/**
 * Configuration specific to the server bundles in a production environment
 */
const serverProdConfig = merge([
    parts.extractCSS({
        useSass: ["css-loader", "sass-loader"],
        useCss: ["css-loader"],
        fallback: "isomorphic-style-loader"
    }),
    parts.loadImages({
        options: {
            limit: 15000, // Inline an image in the JavaScript bundle if it is sized less than 15kB
            name: 'assets/[name].[ext]',
            publicPath: PUBLIC_PATH
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
                },
                {
                    test: /\.md$/,
                    loader: "ignore-loader"
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/client/index.html",
                filename: "./index.html"
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': ENV
            })
        ]
    },
    parts.lintJavaScript({ options: {emitWarning: true}}),
    parts.loadFonts({
        options: {
            name: 'assets/[name].[ext]',
            publicPath: PUBLIC_PATH
        }
    })
]);

/**
 * Configuration specific to the client bundles in a development environment
 */
const clientDevConfig = merge([
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
    parts.extractCSS({
        useSass: ["css-loader", "sass-loader"],
        useCss: ["css-loader"],
        fallback: "isomorphic-style-loader"
    }),
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
        useSass: ["css-loader", "sass-loader"],
        useCss: ["css-loader"],
        fallback: "style-loader"
    }),
    parts.loadImages({
        options: {
            limit: 15000, // Inline an image in the JavaScript bundle if it is sized less than 15kB
            name: 'assets/[name].[ext]',
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