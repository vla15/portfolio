const path = require('path');

module.exports = {
    mode: "development",
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
                test: /\.(js|x?)$/,
                include: path.join(__dirname, "src/"),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["env", { modules: false }], "react"]
                    }
                }
            },
            {
                test: /(\.css)$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    
                ]
            }
        ]
    }
}