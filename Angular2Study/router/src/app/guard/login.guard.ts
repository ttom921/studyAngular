import {CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class LoginGuard implements CanActivate{
    canActivate(): boolean {
        let loggedIn:boolean = Math.random()<0.5;
        if(!loggedIn)
        {
            console.log("用戶未登錄");
        }
        return loggedIn;
    }

}