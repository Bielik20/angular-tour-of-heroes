# Angular Tour Of Heroes

It is based on [Tour Of Heroes (tutorial)](https://angular.io/docs/ts/latest/tutorial/) 
and done using [angular-cli](https://github.com/angular/angular-cli) 
supported by information included in [Angular 2 Tutorial](https://www.sitepoint.com/angular-2-tutorial/) 
and [The Ultimate Angular CLI Reference Guide](https://www.sitepoint.com/ultimate-angular-cli-reference/?utm_source=sitepoint&utm_medium=relatedinline&utm_term=&utm_campaign=relatedauthor)

Working version can be found [here](https://bielik20.github.io/angular-tour-of-heroes/)

## Add SASS support

In project I use SCSS instead of CSS. It was accomplished by changing "angular-cli.json":
```json
"styles": [
    "styles.scss" //was "style.css"
],
```
```json
"styleExt": "scss", //was "css"
```

Main file is in "src/styles.scss" where I include all scss files.
I don't longer include css/scss in Component.ts as they depend on previous files (eg. variables.scss).

To keep functionality of seperated styles I include them in "src/styles.scss" in that manner:
```scss
my-dashboard { @import "/app/dashboard/dashboard.component"; }
```
Where "my-dashboard" is a name of component's selector.

## Add VS Code debug support

File responsible for debugging is ".vscode/launch.json":
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome against localhost, with sourcemaps",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4200",
      // This forces chrome to run a brand new instance, allowing existing
      // chrome windows to stay open.
      "userDataDir": "${workspaceRoot}/.vscode/chrome",
      "sourceMaps": true,
      "webRoot": "${workspaceRoot}",
      "diagnosticLogging": true,
      "sourceMapPathOverrides": {
        "webpack:///./*": "${webRoot}/*"
      }
    },
    ]
}
```

More information about configuration can be found [here](https://go.microsoft.com/fwlink/?linkid=830387).
To start debugging:
- First start 'ng serve'
- Then start debug (F5).
- It will open a new window where breakpoints work.

## Add Bootstrap-SASS

To add necessary dependecies:
```
npm install jquery --save
npm install --save bootstrap-sass ng2-bootstrap
```

In a root folder add file called "webpack.config.js":
```javascript
rules: [
    {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url-loader?limit=10000'
    },
]
```

In "angular-cli.json":
```json
"scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js"
],
```

In "style.scss" add at the top:
```scss
$icon-font-path: '~bootstrap-sass/assets/fonts/bootstrap/';
@import "~bootstrap-sass/assets/stylesheets/bootstrap";
```

In "app.module.ts" add:

```typescript
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';

...

imports: [
    ...
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
],
```

# Beyond Tour of Heroes

I started to expand beyond what is in original tutorial. Things that are added:

## Quests

New model and view containing quests.

# CLI Generated

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.


## Development server
Run `ng servne` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
