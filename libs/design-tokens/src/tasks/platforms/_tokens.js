const fs = require('fs-extra');
const path = require('path');
const tokens = fs
  .readdirSync(path.resolve(__dirname, '../../lib/tokens'))
  .map((file) => file.split('.')[0]);

module.exports = tokens;
