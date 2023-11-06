/**
 * The webpack configuration
 * @author Andrew Jarombek
 * @since 3/20/2018
 */

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const NodemonPlugin = require("nodemon-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const parts = require("./webpack.parts");

// Define paths for the entry point of the app and the output directory
const PATHS = {
    client: path.join(__dirname, 'src/client/index.js'),
    clientBuild: path.join(__dirname, 'dist/client/'),
    server: path.join(__dirname, 'src/server/server.js'),
    serverBuild: path.join(__dirname, 'dist/server/')
};

console.log(`BUILD ENV = ${process.env.BUILD_ENV}`);

let ENV;
switch (process.env.BUILD_ENV) {
    case 'local':
        ENV = JSON.stringify('local');
        break;
    case 'development':
        ENV = JSON.stringify('development');
        break;
    default:
        ENV = JSON.stringify('production');
}

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
                    test: /\.md|html$/,
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
    parts.loadFonts(),
    parts.loadImages()
]);

/**
 * Configuration specific to the server bundles in a development environment
 */
const serverDevConfig = merge([
    {
        mode: "development",
        plugins: [
            new NodemonPlugin()
        ]
    },
    parts.extractCSS({
        useSass: ["css-loader", "sass-loader"],
        useCss: ["css-loader"],
        fallback: "isomorphic-style-loader"
    })
]);

/**
 * Configuration specific to the server bundles in a production environment
 */
const serverProdConfig = merge([
    {
        mode: "production",
    },
    parts.extractCSS({
        useSass: ["css-loader", "sass-loader"],
        useCss: ["css-loader"],
        fallback: "isomorphic-style-loader"
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
                filename: "./index.html",
                favicon: "./src/client/assets/favicon.ico"
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': ENV
            }),
            new ESLintPlugin({
                failOnError: false
            })
        ],
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
    parts.loadFonts(),
    parts.loadImages()
]);

/**
 * Configuration specific to the client bundles in a development environment
 */
const clientDevConfig = merge([
    {
        mode: "development",
        performance: {hints: false}
    },
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
    }),
    parts.extractCSS({
        useSass: ["css-loader", "sass-loader"],
        useCss: ["css-loader"],
        fallback: "isomorphic-style-loader"
    })
]);

/**
 * Configuration specific to the client bundles in a production environment
 */
const clientProdConfig = merge([
    {
        mode: "production"
    },
    parts.extractCSS({
        useSass: ["css-loader", "sass-loader"],
        useCss: ["css-loader"],
        fallback: "style-loader"
    })
]);

module.exports = (env) => {
    const webpack_env = env.webpack_env;
    console.info(`WEBPACK ENV = ${webpack_env}`);

    if (webpack_env === "clientProduction") {
        return merge(clientConfig, clientProdConfig);
    } else if (webpack_env === "serverProduction") {
        return merge(serverConfig, serverProdConfig);
    } else if (webpack_env === "clientDevelopment") {
        return merge(clientConfig, clientDevConfig);
    } else {
        return merge(serverConfig, serverDevConfig);
    }
};
