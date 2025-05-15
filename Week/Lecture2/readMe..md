# Git Commands for Teamwork

```sh
# Cloning the Repository (First Time Setup)
git clone <repo-link> # Run this only the first time

# Checking the Current Branch
git status # Shows which branch you are on and the status of your working directory

# Updating Your Local Repository
git pull # Ensures your local repository is up to date

# Creating a New Branch
git checkout -B <branch-name> # Creates and switches to a new branch

# Adding a New File
touch helloWorld.js # Creates a new file named helloWorld.js

# Staging and Committing Changes
git add helloWorld.js # Stages the new file
git commit -m "Add helloWorld.js" # Commits with a message

# Pushing the Branch to the Remote Repository
git push origin <branch-name> # Pushes the branch to the remote repository

# Switching to Another Branch
git checkout <other-branch> # Switches to another branch
git pull # Updates the branch with the latest changes

# Merging Your Work into the Main Branch
git checkout main # Switches to main branch
git pull origin main # Updates main branch
git merge <branch-name> # Merges your branch into main
git push origin main # Pushes the updated main branch
```

