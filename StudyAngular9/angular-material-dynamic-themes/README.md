# AngularMaterialDynamicThemes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## 說明
  這是使用Angular 13的程式來測試動態theme的改變
  (參考)[https://medium.com/@s.m.mirismaili/angular-material-dynamic-themes-compatible-with-angular-7-8-e642ad3c09f4]
  (githud)[https://github.com/mirismaili/angular-material-dynamic-themes]
```
  ng add @angular/material
```
### 移除靜態的theme
在angular.json
```
"./node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
```
### 加入themes.scss
在styles.scss中
```
@import "themes";
html, body { height: 100%; }
body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }

```

在src/_themes-core.scss
```

```

在src/themes.scss
```
// Below codes should only be included ONCE in your application.
@import '~@angular/material/theming';
@include mat-core();

// Add your desired themes to this map.
$custom-primary: mat-palette($mat-light-blue);
$custom-accent:  mat-palette($mat-orange, 500, A100, A700);
$themes-map: (
  indigo-pink: (
    primary-base: $mat-indigo,
    accent-base: $mat-pink,
  ),

  deeppurple-amber: (
    primary-base: $mat-deep-purple,
    accent-base: $mat-amber,
  ),

  pink-bluegrey: (
    primary-base: $mat-pink,
    accent-base: $mat-blue-gray,
  ),

  purple-green: (
    primary-base: $mat-purple,
    accent-base: $mat-green,
  ),
  hs-blue:(
    primary-base: $custom-primary,
    accent-base:$custom-accent
  )
);

// Import the module and do the job:
@import '_themes-core';
@include make-stylesheets($themes-map);
```
在src\app\theme-preview\theme-preview.component.ts加入自已的theme
```
//import { MatTabChangeEvent } from '@angular/material/tabs';
const THEME_DARKNESS_SUFFIX = `-dark`;
@Component({
  //styleUrls: ['./theme-preview.component.scss']
})
export class ThemePreviewComponent {
  //#region 主題相關
  @HostBinding('class') activeThemeCssClass: string = null!;
  isThemeDark = false;
  activeTheme: string = "indigo-pink";
  themes: string[] = [
    'deeppurple-amber',
    'indigo-pink',
    'pink-bluegrey',
    'purple-green',
    'hs-blue'
  ];
  //#endregion 主是相關

}

```
