# Testxtermjs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

目前是來測試xterm.js的javascript的套件

## 來安裝material

```bash
ng add @angular/material
```

目前選擇`indigo-pink `

加入theme設定

在’styles.scss’中,有四種選一種

```scss
//@import "~@angular/material/prebuilt-themes/deeppurple-amber.css";

//@import "~@angular/material/prebuilt-themes/indigo-pink.css";

//@import "~@angular/material/prebuilt-themes/pink-bluegrey.css";

//@import "~@angular/material/prebuilt-themes/purple-green.css";
```

加入SharedAngularMaterial <https://ithelp.ithome.com.tw/articles/10209937>

```
ng g m share\SharedAngularMaterial
```

在MatIcon中使用SVG

必須透過Angular提供的DomSanitizer Service來信任這個路徑。接著我們就可以透過MatIconRegistry來擴充SVG icon

```typescript
export class SharedAngularMaterialModule implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    this.ngOnInit();

  }

  ngOnInit(): void {

    // this.matIconRegistry.addSvgIconInNamespace(

    //   "custom-svg",

    //   "angular",

    //   this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/angular_solidBlack.svg")

    // );

  }
```

## 先來安裝元件

```bash
npm install xterm
npm install --save xterm-addon-web-links
npm install --save xterm-addon-fit
```

## 建立xterm的web元件

```bash
ng g component Xterm
```





參考資料

[javascript - Integrate xterm.js to Angular - Stack Overflow](https://stackoverflow.com/questions/53307998/integrate-xterm-js-to-angular)

[View](https://book.king011.com/view/en-US/view/web-js-xterm/example)

https://www.jianshu.com/p/ee42b9386c4f
