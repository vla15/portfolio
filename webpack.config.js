const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/public",
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.(js|jsx)?$/,
                include: path.join(__dirname, "src/"),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["env", { modules: false }], "react"]
                    }
                }
            }
        ]
    }
}