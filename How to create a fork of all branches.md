1. Fork th repo
2. Clone yours
   git clone https://github.com/Jedidiah-Solomon/webpack-playlist.git
3. make the original remote upstream
   git remote add upstream https://github.com/iamshaunjp/webpack-playlist.git
4. Fetch all branches from remote
   git fetch upstream
5. List all branches locally but not remote to yours now
   git branch -r
   Assuming you have this:  
   origin/HEAD -> origin/master
   origin/master
   upstream/lesson-1
   upstream/lesson-2
   upstream/lesson-3
   upstream/lesson-4
   upstream/lesson-5
   upstream/lesson-6
   upstream/master

then create the branches you saw locally
git checkout -b lesson-1 upstream/lesson-1
git checkout -b lesson-2 upstream/lesson-2
git checkout -b lesson-3 upstream/lesson-3

do it to the numbers

6. create a .sh script to run the new branches if you dont want to create them one by one locally e.g

**./create_branches.sh**

```
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
```

7. Push all to github
