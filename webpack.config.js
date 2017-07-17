var path = require('path');

module.exports = {
  entry: './frontend/app.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
};