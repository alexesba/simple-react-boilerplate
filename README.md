# Simple Rebo

## Simple [**React**](https://facebook.github.io/react/) boilerplate

> Create [**React**](https://facebook.github.io/react/) applications and avoid spent time configuring tasks for transpiling scss and javascripts
This project has born with the main idea to have something up and running in a couple of minutes. It also provides you 
a structure of files to keep your code organized in packages called **Components** this boilerplate integrates [**Redux**](https://github.com/reactjs/redux)

## Technologies implemented:
  - *babel*
  - *es6*
  - *jsx*
  - *react*
  - *redux*
  - *scss*


## Available tasks/commands:
* `npm start:` runs the application in development mode it will open your browser in a tab and display a small demo
* `npm run build`: compiles the whole src directory whithin the `build` directory 
* `npm run test`: runs the test suite.
* `npm coverage`: opens the coverage results in the browser


## File Structure:
```sh
.
├── README.md
├── build
│   ├── 966a74a61246a4060d377bbc8321529e.svg
│   ├── app.js
│   ├── index.html
│   └── style.css
├── coverage
├── index.ejs #ejs template which is used on production and development env.
├── index.js #entry file for webpack compilations in other word our main file
├── package.json #package dependencies and dev-dependcies.
├── src 
│   ├── components
│   │   ├── App
│   │   │   ├── App.js
│   │   │   ├── App.spec.js
│   │   │   ├── AppActions.js
│   │   │   ├── AppContainer.js
│   │   │   ├── AppReducer.js
│   │   │   ├── index.js
│   │   │   ├── package.json
│   │   │   ├── react.svg
│   │   │   └── style.scss
│   │   └── NotFound
│   │       ├── NotFound.js
│   │       └── package.json
│   ├── routes.js
│   └── store.js
├── webpack.config.js #config file used for development
├── webpack.production.config.js #config file used for production
├── webpack.test.config.js #used to compile and run the suite test
└── yarn.lock #used to install all dependencies if you are using yarn
```
