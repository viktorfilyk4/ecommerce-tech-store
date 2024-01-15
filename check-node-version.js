const semver = require('semver');
const engines = require('./package').engines;

const version = engines.node;
if (!semver.satisfies(process.version, version)) {
  console.log(
    `Required node version ${version} not satisfied with current version ${process.version}.`,
    'Remove `node_modules`, change Node.js version and reinstall dependencies using `npm ci`'
  );
  process.exit(1);
}