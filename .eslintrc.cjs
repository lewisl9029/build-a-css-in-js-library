const config = require('@lewisl9029/eslint-config').config({
  environment: 'browser',
})

module.exports = {
  ...config,
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          public: './public',
        },
        extensions: ['.js'],
      },
    },
  },
}
