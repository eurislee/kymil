const path = require("path");
const config = require("./webpack.common")
const { merge } = require("webpack-merge")

module.exports = merge(config, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        open: true
    }
})
