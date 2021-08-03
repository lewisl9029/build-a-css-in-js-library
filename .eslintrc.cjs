const {
  eslintConfig,
  eslintConfigWithImportmap,
} = require("@lewisl9029/project-boilerplate");

const config = eslintConfigWithImportmap({
  config: eslintConfig({
    isRoot: true,
    environment: "browser",
  }),
  importmapPath: "./app/production.importmap",
  root: "./app",
});

module.exports = {
  ...config,
};
