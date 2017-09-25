const path = require('path');
module.exports = {
    entry: "./scripts/main/main.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname, "node_modules")]
            }
        ]
    }
}