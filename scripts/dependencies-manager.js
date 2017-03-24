// bower file updater script
// http://stackoverflow.com/questions/5726729/how-to-parse-json-using-node-js
function DependenciesManager() {
    const fs = require('fs');

    function updateDependencies(bowerJson, newBranch) {
        Object.keys(bowerJson.devDependencies).forEach(function(key) {
            var val = bowerJson.devDependencies[key],
                splitAtGit,
                newDependency,
                branch;

            console.log('updating ' + key + ': ' + val);

            splitAtGit = val.split('.git');

            branch = splitAtGit[1];
            if (branch) {
                newDependency = val.replace(branch, '#' + newBranch);
            } else {
                newDependency = val + '#' + newBranch;
            }

            console.log('new value ' + key + ': ' + newDependency);
            bowerJson.devDependencies[key] = newDependency;
        });
    }

    this.updateAllGitBranches = function (filePath, branch) {
        fs.readFile(filePath, (err, data) => {
            if (err) throw err;
            var bowerJson = JSON.parse(data);
            updateDependencies(bowerJson, branch);

            var newBowerJson = JSON.stringify(bowerJson, null, 4);
            console.log('new file', newBowerJson);

            fs.writeFile(filePath, newBowerJson, function (err) {
                if (err) return console.log(err);
                console.log(JSON.stringify(bowerJson));
                console.log('writing to ' + filePath);
            });
        });
    }
    
}

module.exports = new DependenciesManager();