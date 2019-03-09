import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
        const id = localStorage.getItem('id');
        console.log(id);

         const token = localStorage.getItem('token');

        if (localStorage.getItem('currentUser')) {
        
            return true;
        } 
        // not logged in so redirect to login page with the return url
        this.router.navigate([''], { queryParams: { returnUrl: state.url }});
        return false;
    }
}






// import { Injectable } from '@angular/core';
// import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// @Injectable()
// export class AuthGuard implements CanActivate {


//     constructor(private router : Router){}

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         let url: string = state.url;  
//         return this.verifyLogin(url);
//     }

//     verifyLogin(url) : boolean{
//         if(!this.isLoggedIn()){
//             this.router.navigate(['/login']);
//             return false;
//         }
//         else if(this.isLoggedIn()){
//             return true;
//         }
//     }
//     public isLoggedIn(): boolean{
//         let status = false;
//         if( localStorage.getItem('isLoggedIn') == "true"){
//           status = true;
//         }
//         else{
//           status = false;
//         }
//         return status;
//     }
// }