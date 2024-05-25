#!/bin/bash

# List all branches
echo "List of available branches:"
git branch

# Prompt the user to enter the branch to work with
echo "Enter the branch to work with:"
read new_branch

# Get the available branches and save in an array using substitution sed to remove the *
available_branches=($(git branch | sed 's/*//'))

# Get the current branch and save in a variable
current_branch=$(git branch --show-current)

# Check if the entered branch exists in the list of available branches
branch_exists=false
for available_branch in "${available_branches[@]}"; 
do
    if [ "$available_branch" == "$new_branch" ]; then
        branch_exists=true
        break
    fi
done

# If the branch exist then move to it else alert error message
if [ "$branch_exists" = true ]; then
    echo "Switching to branch: $new_branch"
    git checkout "$new_branch"
else
    echo "Warning: $new_branch does not exist. You are still on $current_branch"
fi
