import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: "development",

    entry: "./src/index.js",

    devServer: {
        static: "./dist",
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
};