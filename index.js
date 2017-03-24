#! /usr/bin/env node
(() => {
    var dependencyMgr = require('./scripts/dependencies-manager');

    console.log('args', process.argv);
    console.log('updating branch to: ', process.argv[2]);

    var branch = process.argv[2];

    dependencyMgr.updateAllGitBranches('bower.json', branch);
})()