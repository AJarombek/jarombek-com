/**
 * Webpack parts to be included in the main webpack.config.js file
 * @author Andrew Jarombek
 * @since 3/22/2018
 */

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.generateSourceMaps = ({type}) => ({
    devtool: type
});

/**
 * Configure the devServer to be run in the development environment
 * @param host - the hostname to run the dev server on - defaults to localhost
 * @param port - the part number to run the dev server on - defaults to 8080
 * @returns {{devServer: {}}}
 */
exports.devServer = ({ host, port } = {}) => ({
    devServer: {
        // stats: "errors-only", // reduce the logging when running the dev server
        host,
        port,
        open: true,
        overlay: true, // Displays an error overlay in the browser when the code is broken
        hotOnly: true // Don't perform the refresh in browser if hot loading fails
    }
});

/**
 * Use HotModuleReplacement in a development environment
 * @returns {{plugins: *[]}}
 */
exports.hotModuleReplacement = () => ({
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

/**
 * Lint JavaScript files with ESLint
 * @param include - files to whitelist for use of these loaders
 * @param exclude - files to blacklist from these loaders
 * @param options - additional options to pass to the ESLint loader
 * @returns {{module: {rules: *[]}}}
 */
exports.lintJavaScript = ({ include, exclude, options }) => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                include,
                exclude,
                enforce: "pre",

                loader: "eslint-loader",
                options
            }
        ]
    }
});

/**
 * Load a Sass stylesheet and compile it to CSS
 * @param include - files to whitelist for use of these loaders
 * @param exclude - files to blacklist from these loaders
 * @returns {{module: {rules: *[]}}}
 */
exports.loadSass = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                include,
                exclude,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
});

/**
 * Load a Sass stylesheet and compile it to CSS - this version is used on the server
 * @param include - files to whitelist for use of these loaders
 * @param exclude - files to blacklist from these loaders
 * @returns {{module: {rules: *[]}}}
 */
exports.loadServerSass = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                include,
                exclude,
                use: ["isomorphic-style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
});

/**
 * Extract the CSS from being inlined with the JavaScript.  This Webpack config is used in
 * production environments to generate a separate CSS bundle
 * @param include - files to whitelist for use of these loaders
 * @param exclude - files to blacklist from these loaders
 * @param use - specify which loaders to use
 * @param fallback - loader to be used if CSS is not extracted
 * @returns {{module: {rules: *[]}, plugins: *}}
 */
exports.extractCSS = ({ include, exclude, useCss, useSass, fallback }) => {

    const plugin = new ExtractTextPlugin({
        filename: '[name].css'
    });

    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    exclude,
                    loader: plugin.extract({
                        use: useCss,
                        fallback
                    })
                },
                {
                    test: /\.scss$/,
                    include,
                    exclude,
                    loader: plugin.extract({
                        use: useSass,
                        fallback
                    })
                }
            ]
        },
        plugins: [plugin]
    }
};

/**
 * Load images into the bundle
 * @param include - files to whitelist for use of URL loader
 * @param exclude - files to blacklist from URL loader
 * @param options - additional options to pass to the URL loader
 * @returns {{module: {rules: *[]}}}
 */
exports.loadImages = ({ include, exclude, options } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|gif)$/,
                include,
                exclude,
                use: {
                    loader: 'url-loader',
                    options
                }
            }

        ]
    }
});

/**
 * Load fonts into the bundle
 * @param include - files to whitelist for use of file loader
 * @param exclude - files to blacklist from file loader
 * @param options - additional options to pass to the file loader
 * @returns {{module: {rules: *[]}}}
 */
exports.loadFonts = ({ include, exclude, options } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|woff2|otf)(\?v=\d+\.\d+\.\d+)?$/,
                include,
                exclude,
                use: {
                    loader: 'file-loader',
                    options
                }
            }
        ]
    }
});