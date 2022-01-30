
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state.model';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
    permission:boolean= false;
    constructor(private _router:Router ,private store: Store<AppState>) {

    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        this.store.select(store=>store.loggedInUser).subscribe(user=>{
            this.permission = user?true:false
        })         
        //check some condition  
        if (!this.permission)  {
            console.log('nemas permission');
            
            alert('You are not allowed to view this page');
            //redirect to login/home page etc
            //return false to cancel the navigation
            return false;
        } 
        return true;
    }
 
}