var Path = require("path");

module.exports = {
    entry: "./app.js",
    output: {
        path: Path.resolve("/build/js"),
        publicPath: "public/js",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "public"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    },
    resolve: ['', '.js']
};