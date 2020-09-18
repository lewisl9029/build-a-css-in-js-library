const config = require('@lewisl9029/eslint-config').babelConfig

module.exports = (api) => {
  api.cache.forever()
  return config
}
