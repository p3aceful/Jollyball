const path = require('path');

module.exports = serverConfig = {
    entry: './src/server/server.js',
    target: 'node',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist.server'),
    },
    mode: 'development',
}