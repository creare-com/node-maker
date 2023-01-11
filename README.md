The Node Maker is a user interface for creating PODPAC nodes graphically, and integrates with the SoilMAP [rpp-server](https://github.com/creare-com/rpp-server).
The Node Maker a cross-platform application that uses angular framework (https://angular.io/).

# Setup
Install node and npm and nvm
```bash
nvm install 18.7.0
npm install @angular/cli@14.1.0
```

Then, to use the local version of `ng` use:
```bash
npx ng build
```
for example.

Before building you will need to install the node modules by running:
```bash
npm i
```

This will install all of the dependencies in package.json.

# NodeMaker

This project uses [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Dependencies ##

This project depends on the rpp-server which can be found at [RPP-SERVER GITHUB](https://github.com/creare-com/rpp-server).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Before running `ng serve`, you may need to run `npm i` to install the required packages.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
