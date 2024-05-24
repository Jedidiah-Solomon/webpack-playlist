#!/bin/bash

# Fetch the branches and their respective commits from the upstream repository
git fetch upstream

# Array of branches to be created
branches=("lesson-1" "lesson-2" "lesson-3" "lesson-4" "lesson-5" "lesson-6")

# Loop through each branch in the array
for branch in "${branches[@]}"
do
    # Create a local branch tracking the upstream branch
    git checkout -b $branch upstream/$branch
done

# Check out the master branch at the end
git checkout master
