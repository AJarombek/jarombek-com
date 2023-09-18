/**
 * Webpack parts to be included in the main webpack.config.js file
 * @author Andrew Jarombek
 * @since 3/22/2018
 */

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
 * @returns {{module: {rules: *[]}, plugins: *}}
 */
exports.extractCSS = ({ include, exclude }) => {

    const plugin = new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
    });

    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    exclude,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
                {
                    test: /\.scss$/,
                    include,
                    exclude,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                }
            ]
        },
        plugins: [plugin]
    }
};

/**
 * Load images into the bundle
 * @returns {{module: {rules: *[]}}}
 */
exports.loadImages = () => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/inline'
            }
        ]
    }
});

/**
 * Load fonts into the bundle
 * @returns {{module: {rules: *[]}}}
 */
exports.loadFonts = () => ({
    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|woff2|otf|ico)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource'
            }
        ]
    }
});