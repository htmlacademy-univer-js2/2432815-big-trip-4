<<<<<<< HEAD
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
=======

const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

>>>>>>> origin

module.exports = {
  entry: "./src/main.js",
  output: {
<<<<<<< HEAD
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
=======

    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',

>>>>>>> origin
    clean: true,
  },
  devtool: "source-map",
  plugins: [
    new CopyPlugin({
<<<<<<< HEAD
      patterns: [{ from: "public" }],
=======

      patterns: [{ from: 'public' }],

>>>>>>> origin
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
<<<<<<< HEAD
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
=======
        use: ['babel-loader']
      }
    ]
  }

>>>>>>> origin
};
