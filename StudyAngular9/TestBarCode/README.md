# TestBarCode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## barcode和qrcode相關
安裝程式庫

```
npm i @zxing/library --save
```
  目前測試有關barcode和qrcode，在android上的連續模式，可以辨示出qrcode或barcode，
  但是拍照模式只有barcode的辨示率可備使用，qrcode的辨示率太差不能使用
相關資訊
https://stackoverflow.com/questions/39210467/get-angular-cli-to-ng-serve-over-https
https://stackblitz.com/edit/zxing-ngx-scanner?file=projects%2Fzxing-scanner-demo%2Fsrc%2Fapp%2Fapp.component.html


```
https://jsfiddle.net/j6m0wuk7/

navigator.mediaDevices.addEventListener('devicechange', function(e) {
  alert();
});
document.getElementById('video').addEventListener('started', function() {
    alert();
});
var codeReader = new ZXing.BrowserMultiFormatReader();
codeReader.decodeFromInputVideoDevice(undefined, 'video')
    .then((result) => { document.write(result); })
    .catch(err => console.error(err));
```
