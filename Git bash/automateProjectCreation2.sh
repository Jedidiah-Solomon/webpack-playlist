#!/bin/bash

# Prompt the user for the project name
echo "Enter the project name:"
read project_name

# Create the project directory
mkdir "$project_name"

# Navigate into the project directory
cd "$project_name"

# Create subdirectories for the backend and frontend
mkdir -p backend/controllers backend/middleware backend/models backend/routes backend/config
mkdir -p frontend/public/assets/images frontend/src/components frontend/src/pages frontend/src/styles

# Create basic HTML, CSS, and JS files for the frontend
echo "<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>$project_name</title>
    <link rel='stylesheet' href='assets/styles.css'>
</head>
<body>
    <div id='root'></div>
    <script src='src/index.js'></script>
</body>
</html>" > frontend/public/index.html

echo "* {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}" > frontend/src/styles/main.css

echo "import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));" > frontend/src/index.js

echo "import React from 'react';

function App() {
    return (
        <div>
            <h1>Welcome to $project_name</h1>
        </div>
    );
}

export default App;" > frontend/src/App.js

# Create basic JS files for the backend
echo "const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const db = require('./config/db');

app.use('/api', require('./routes/api'));

app.listen(port, () => {
    console.log(\`Server running on port \${port}\`);
});" > backend/app.js

echo "const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

module.exports = db;" > backend/config/db.js

echo "const express = require('express');
const router = express.Router();

// Add your routes here

module.exports = router;" > backend/routes/api.js

# Create basic .gitignore file
echo "node_modules
dist
.env
" > .gitignore

# Create README file
echo "# $project_name

This project was generated with a setup script.

## Getting Started

To get started, run the following commands:

\`\`\`bash
cd backend
npm install
cd ../frontend
npm install
\`\`\`

Then, to start the development server:

\`\`\`bash
cd backend
npm start
cd ../frontend
npm start
\`\`\`

## Project Structure

\`\`\`
project-root/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── config/
│       └── db.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── assets/
│   │       └── images/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   │       └── main.css
│   ├── package.json
│   └── webpack.config.js
├── node_modules/
├── .gitignore
├── package.json
└── README.md
\`\`\`
" > README.md

# Initialize npm and install dependencies for both frontend and backend
cd backend
npm init -y
npm install express mongoose

cd ../frontend
npm init -y
npm install react react-dom

# Create a simple webpack configuration file for the frontend
echo "const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
};" > webpack.config.js

# Create a Babel configuration file for the frontend
echo "{
  \"presets\": [\"@babel/preset-env\", \"@babel/preset-react\"]
}" > .babelrc

# Print completion message
echo "Project $project_name setup completed!"
