# Fetch Repo with Config 

# TODO repo

# Ensure the environemnt 

look in to SETUP_ENV.md

## genereate project

* `ember new track-items --no-welcome --skip-bower --yarn`

## Tests / Static Analytics

### replace qunit with mocha 

````bash
ember install ember-cli-mocha
````
Answer "Yes" when ask for files overwrite

### linters

* install
````bash 
ember install ember-cli-template-lint
yarn add eslint-plugin-ember -D
````

* update .eslintrc.js 
```` js
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:ember/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'no-console': [1, { allow: ['warn', 'error'] }],
  'comma-dangle': [2, 'only-multiline'],
  'space-before-function-paren': 'off',
  'no-extra-semi': 2,
  quotes: [2, 'single', 'avoid-escape'],
  // follwing rules only for workshop (in production they should be defnied as errors)
  'ember/named-functions-in-promises': 'warn',
  'ember/alias-model-in-controller': 'warn',
  },
};


````

## Configure VSCode - workspace settings

Open Preferences / Settings [and copy to workspace settings]

.vscode/settings.js
```` js
{
  "eslint.autoFixOnSave": false,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.autoSave": "onWindowChange",
  "vsicons.presets.tsOfficial": true,
  "vsicons.presets.hideFolders": true,
  "git.enableSmartCommit": true,
  "workbench.colorTheme": "Ember Frost",
  "vim.disableAnnoyingNeovimMessage": true,
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/tmp": true,
    "**/dist": true
  },
  "emmet.syntaxProfiles": {
    "handlebars": "html",
    "html": {
      "attr_quotes": "single"
    }
  },
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all",
  "html.format.indentHandlebars": true,
  "diffEditor.renderSideBySide": false,
}
````

## Setup build Targets

### configure build targets 

* update config/targets.js
```` js
/* eslint-env node */
module.exports = {
  browsers: ['last 1 Chrome versions', 'last 1 Firefox versions'],
};

````

* replace default uglifier with one that support esnext
```` bash
yarn remove ember-cli-uglify
ember install ember-cli-uglify-es
````

## Install CSS (Tachyons)

* `yarn add tachyons -D` 
* add to ember-cli-build.js `app.import('node_modules/tachyons/css/tachyons.min.css');`

## Setup style guide

* add in router.js `this.route('style-guide');`
* copy `templates/style-guide` folder and hbs file

## Configure CI

### replace chrome to firefox in CI env

* edit testem.js
```` js
  launch_in_ci: ['Firefox'],
````

### Circle CI

* remove .travis.yml file
* add .circleci/config.yml with following content

```` yml
version: 2
jobs:
  build:
    working_directory: ~/just-items
    docker:
      - image: circleci/node:latest-browsers
    steps:
      - checkout
      - restore_cache:
          key: dependency-cache-{{ checksum "package.json" }}
      - run:
          name: Download Latest Firefox
          command: "[ -d ~/firefox ] || ( wget -O ~/ff-latest.tar.bz2 'https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US' && tar xjf ~/ff-latest.tar.bz2 -C ~/ )"
      - run: 
          name: Link Firefox
          command: sudo ln -sf ~/firefox/firefox /usr/bin/firefox
      - run:
          name: Install Yarn
          command: 'sudo curl -o- -L https://yarnpkg.com/install.sh | bash'
      - run:
          name: Install packages
          command: yarn install
      - save_cache:
          key: dependency-cache-{{ checksum "package.json" }}
          paths:
            - ./node_modules
            - ~/firefox
            - ~/.npm
            - ~/.yarn-cache
            - ~/.cache
      - run:
          name: Run tests
          command: node_modules/ember-cli/bin/ember test

````

* Push to repo to github
* open circle ci dashboard https://circleci.com/dashboard 
* setup project: projects / add project / setup project / start building

## Heroku deploy 

* go to heroku dashboard add new app
* configure [buildpack](https://github.com/heroku/heroku-buildpack-ember-cli)
* configure deploy automatic from github
