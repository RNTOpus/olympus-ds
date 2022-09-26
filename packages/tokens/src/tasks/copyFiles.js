const fs = require('fs-extra');
function copyFiles (rootPath, buildPath) {
  fs.copy(`${rootPath}/package.json`, `${buildPath}/package.json`, err => {
    if (err) return console.error(err)
    console.log('package file successfully copied!')
  })
  fs.copy(`${rootPath}/README.md`, `${buildPath}/README.md`, err => {
    if (err) return console.error(err)
    console.log('readme file successfully copied!')
  })
}

module.exports = copyFiles
