import { CanDeactivate } from "@angular/router";
import { ProductComponent } from "../product/product.component";

export class UnsaveGuard implements CanDeactivate<ProductComponent>{
    canDeactivate(component: ProductComponent) :boolean {
        return window.confirm("你還未保存，確定要離開麼");
    }

}