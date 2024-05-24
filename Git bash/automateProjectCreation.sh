#!/bin/bash

# Prompt the user for the project name
echo "Enter the project name:"
read project_name

# Create the project directory
mkdir "$project_name"

# Navigate into the project directory
cd "$project_name"

# Create subdirectories
mkdir src dist assets

# Create basic HTML, CSS, and JS files
echo "<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>$project_name</title>
    <link rel='stylesheet' href='assets/styles.css'>
</head>
<body>
    <h1>Welcome to $project_name</h1>
    <script src='src/app.js'></script>
</body>
</html>" > index.html

echo "* {
    font-family: Arial, sans-serif;
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
}" > assets/styles.css

echo "console.log('Hello, $project_name!');" > src/app.js

echo "Project $project_name setup completed!"
