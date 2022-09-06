const fs = require('fs-extra');
const path = require('path');
const rootPath = path.resolve(__dirname, '../../');
const buildPath = path.resolve(__dirname, `${rootPath}/../../dist/libs/component-styles`);
fs.copy(`${rootPath}/package.json`, `${buildPath}/package.json`, err => {
  if (err) return console.error(err)
  console.log('package file successfully copied!')
})
fs.copy(`${rootPath}/README.md`, `${buildPath}/README.md`, err => {
  if (err) return console.error(err)
  console.log('readme file successfully copied!')
})
fs.copy(`${rootPath}/src/index.css`, `${buildPath}/index.css`, err => {
  if (err) return console.error(err)
  console.log('index.css file successfully copied!')
})
fs.copy(`${rootPath}/src/css`, `${buildPath}/css`, err => {
  if (err) return console.error(err)
  console.log('css directory successfully copied!')
})
