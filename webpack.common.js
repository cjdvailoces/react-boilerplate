const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

let target = "web";

if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === "production") {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    target: target,

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        assetModuleFilename: "images/[hash][ext][query]",
    },

    module: {
        rules: [
            {
                test: /\.(?:ico|png|jpe?g|git)$/i,
                type: "asset/resource",
                // parser: { // Update contion on pre-determining for asset/inline
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024,
                //     },
                // },
            },
            {
                test: /\.(woff(2)?|eof|ttf|otf|svg)$/,
                type: "asset/inline", // Create base64 for images other than SVG
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{loader: "babel-loader"}],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],

    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true,
    },
};
