const path = require('path');

module.exports = {
    entry: './src/server/main.js',
    target: 'node',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist.server'),
    },
}