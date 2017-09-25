1. Install webpack globally using npm
    npm install -g webpack@beta
2. Install react and react-dom
    npm install --save-dev react react-dom
3. Install babel modules
   npm i babel-loader babel-preset-es2015 babel-preset-react -S
4. Create a sample react js file
5. Create webpack.config.js file with below contents
   module.exports = {
     entry: './demo',
     output: {
       filename: 'bundle.js'
     },
     module: {
       loaders: [
         {
           test: /\.js?$/,
           loader: 'babel-loader',
           exclude: /node_modules/
         }
       ]
     }
   }

