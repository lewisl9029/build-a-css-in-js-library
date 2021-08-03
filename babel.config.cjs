const babelConfig = require("@lewisl9029/project-boilerplate").babelConfig;

module.exports = (api) => {
  api.cache(true);
  return babelConfig;
};
