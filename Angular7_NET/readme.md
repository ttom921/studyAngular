# 首先更新nodejs
在windosw下，直接移除之前安裝的nodejs,在安裝新的
# 在安裝aggular/cli
在console下
```
npm install -g @angular/cli
```
# 建立webapi
建立一個目錄webapi，在目錄下執行
```
dotnet new webapi
```

# 建立angularapp
在Angular7的目錄下執行
```
ng new static-app
```
## 加入service
```
ng generate service bifurcation
```
# 建立合一的專案
建立目錄ng-host,在目錄下
```
dotnet new angular
```
要升級到7，要先將原來的ClientApp,移除在下此命令
```
ng new ClientApp
```
[Creating an Angular 7 App with ASP.NET Core: A Step-by-Step Guide](https://www.telerik.com/blogs/creating-an-angular-7-app-with-aspnet-core-step-by-step-guide)


###### 參考
* [Getting started](https://angular.io/guide/quickstart?utm_source=jeliknes&utm_medium=blog&utm_campaign=medium&WT.mc_id=medium-blog-jeliknes)