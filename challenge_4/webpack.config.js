module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};



// module.exports = {
//   entry: __dirname + '/client/src/index.jsx',
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         exclude: /node_modules/,
//         use: {
//         },
//         loader: 'babel-loader'
//         query: {
//           presets: ["@babel/preset-env", "@babel/preset-react"]
//         }
//       }
//     ]
//   },
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/client/dist'
//   }
// };