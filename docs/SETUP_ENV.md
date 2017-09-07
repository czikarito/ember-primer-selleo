# SETUP

## Prerequisites

You will need the following **accounts**:

* GitHub
* Heroku 
* Cirle CI

You will need the following **things properly installed** on your computer.

* [Git](https://git-scm.com/)
  * test `git --version`
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
  * test: `heroku -v` 

* [Ember CLI](https://ember-cli.com/)
  * [Node.js](https://nodejs.org/) (with Yarn)
    * Install NVM
      * for macOS, linux use [nvm](https://github.com/creationix/nvm#install-script) 
      * for windows 
        * first remove node (if you have any)
        * use [nvm-setup](https://github.com/coreybutler/nvm-windows/releases) to install nvm
    * install node: `nvm install 8.4.0`
    * install yarn `npm i -g yarn`
  * install ember cli `yarn global add ember-cli@2.15`
  * test: `ember -v`
* [Watchman](https://facebook.github.io/watchman/docs/install.html) only on macOS, Linux
  * test: `watchman -v`

### For Windows Only 

* install ember-cli-windows `yarn global add ember-cli-windows`
* within directory of the project (as administrator) run `ember-cli-windows -D -S -H` (in CMD / PowerShell)
* exclude also nvm, node installation directories, together with yarn cache directory
  * [how to skip file from scan by windows defender}(https://answers.microsoft.com/en-us/protect/wiki/protect_defender-protect_scanning/how-to-exclude-a-filefolder-from-windows-defender/f32ee18f-a012-4f02-8611-0737570e8eee)
  * [how to exclude files & folder s from search](https://www.addictivetips.com/windows-tips/how-to-exclude-files-folders-from-cortana-search-on-windows-10/)

For more information have a look at [ember-cli-windows documentation](https://github.com/felixrieseberg/ember-cli-windows#parameters-and-configuration)

## Installation

* within your own github account fork the repository.
* `git clone <repository-url>` (remember fork of this repository)
* `cd ember-primer-exercises`
* `yarn install`

## Running / Development

* `ember serve` or `🐹 s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## TOOLS 

## BROWSERS

### FIREFOX

* [FIREFOX DEVELOPER EDITION](https://www.mozilla.org/pl/firefox/developer/)
* [ember inspector](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### CHROME  

* [CHROME](https://www.google.com/chrome/browser/desktop/index.html)
* [ember inspector](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)

### Editor - Visual Studio Code 

[Visual Studio Code](https://code.visualstudio.com/download)

#### EXTENSIONS 

```` bash
code --install-extension emberjs.emberjs
code --install-extension dhedgecock.ember-syntax
code --install-extension ciena-blueplanet.vsc-ember-frost
code --install-extension spoonscen.es6-mocha-snippets
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
````

* [Ember.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=emberjs.emberjs) - emberjs.emberjs
* [Ember Colorizer](https://marketplace.visualstudio.com/items?itemName=ciena-blueplanet.vsc-ember-frost) - ciena-blueplanet.vsc-ember-frost
* [Ember Syntax](https://marketplace.visualstudio.com/items?itemName=dhedgecock.ember-syntax) - dhedgecock.ember-syntax
* [ES Mocha Snippets](https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets) - spoonscen.es6-mocha-snippets
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - esbenp.prettier-vscode
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - dbaeumer.vscode-eslint


* [and if you like Vim Language :-)](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) - vscodevim.vim `code --install-extension vscodevim.vim`


#### Base Shortcuts

Run Command - shift+cmd+p
Find File - cmd+p
Related Files - cmd+alt+r

Format Code - shift-alt+f

Toggle Terminal - ctrl+`

Hide left side panel - cmd+b

#### CONFIG 

have a look at settings.json in the repo
