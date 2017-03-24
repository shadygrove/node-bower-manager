# node-bower-manager
Node utility for automating changes to bower.json files

git clone <url-to-this-repo>

cd node-bower-manager

npm link

# Usage
cd /to/directory/with/bower.json

pr-bower my-release-branch

the git references in your bower.json will be updated with '#' followed by your branch name.  If there was already a branch it will be updated as well.

