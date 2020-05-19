module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true
    },
    extends: [
      'airbnb',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      ecmaFeatures: {
        jsx: true
      },
      sourceType: 'module',
    },
    settings: {
      react: {
        createClass: 'createReactClass',
        pragma: 'React',
        version: 'detect',
        flowVersion: '0.53'
      },
      linkComponents: [
        // Components used as alternatives to <a> for linking, e.g <Link to={ url } />
        'Hyperlink',
        {'name': 'Link', 'linkAttribute': 'to'}
      ]
    },
    rules: {
      "comma-dangle": ["error", "never"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"]}],
      "no-param-reassign": ["error", { "props": false }],
      "import/no-extraneous-dependencies": "off",
      "linebreak-style": 0
    },
  };