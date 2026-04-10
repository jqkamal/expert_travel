function readPackage(pkg, context) {
  // Force optional dependencies to be installed
  if (pkg.optionalDependencies) {
    for (const dep of Object.keys(pkg.optionalDependencies)) {
      pkg.dependencies[dep] = pkg.optionalDependencies[dep];
    }
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
};