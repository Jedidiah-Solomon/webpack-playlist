#!/bin/bash

# Add files to staging
git add .

# Prompt the user for a commit message
echo "Enter your commit message: "
read commit_msg

# Commit with the provided message
git commit -m "$commit_msg"

# Get the current branch name
current_branch=$(git branch --show-current)

# Push to the current branch
git push origin "$current_branch"

echo "Action completed sucessfully"

#chmod +x github_app.sh  --to make it executable

