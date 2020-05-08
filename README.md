# Steps for the React app

### (1) for Flask use "templates" instead of "public" 
$ mkdir public src  
$ touch public/index.html src/app.jsx  
$ mkdir src/styles  
$ touch src/styles/style.scss  
write the following into style.scss: `p { color: blue; }`

### (2) in public/index.html write the following: 
```
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>React App</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="static/bundle.js"></script>
    </body>
  </html>
```

### (3) initialize the project (creates package.json)
$ npm init -y

### (4) install CSS and SASS loaders
$ npm install css-loader style-loader sass-loader node-sass --save-dev

### (5) install Webpack
$ npm install webpack webpack-cli --save-dev

### (6) install and configure Babel (tools that allow integration with Webpack)
$ npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev

### (7) create a ".babelrc" file [ touch .babelrc ] with the following contents:
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### (8) create Webpack config file [ touch webpack.config.js ] with the below content:
```
const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
```

### (9) add the Webpack command to package.json under "scripts" (production mode for optimized files):
```
"scripts": {
    "start": "webpack --mode=development",
    "build": "webpack --mode=production"
  }
```

### (10) install React
$ npm install react react-dom

### (11) add react code under src/app.jsx file:
```
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';

const template = <p>Hello from react</p>;

ReactDOM.render(template, document.getElementById('root'));
```

### (12) run the react app to generate bundle.js file
$ npm start

### (13) Open index.html locally to see the result or Run the Flask app to serve it 

### (14) every time changes are made to react app, re-generate public files with:
$ npm start