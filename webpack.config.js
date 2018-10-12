const path = require('path');

module.exports = {
  entry: './client/src/index.js', //where should webpack start looking for files
  output: { //where should webpack put the bundle
    path: path.resolve(__dirname, 'client/dist'), //what folder?
        filename: 'bundle.js' //what filename?
  }, //webpack will put our bundle at ./dist/bundle.js
  module: {
	  rules: [
	    {
	      test: /\.jsx?$/, //which files should this loader run on? regular expression that means .js or jsx
	      exclude: /(node_modules)/, //don't transpile node_modules because those are our node libraries
	      use: {
	        loader: 'babel-loader', //run babel on those files
	        options: {
	          presets: ['@babel/preset-env', '@babel/preset-react'] //with this preset that translates es6 to es5
	        }
	      }
	    }
	  ]
	},
	mode: 'development',
};