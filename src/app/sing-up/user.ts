
export interface result {
        name : string;
        _id: string;
        email: string;
         password:string;
         mobile: string;
         city: string;
         address: string;
         state: string;
         lat: string;
         long: string;
         IEMI: string;
         deviceId: string;
         
   
  }
  
  // @Injectable()
  // export abstract class TodoListService {
  //   /**
  //    * Returns a list of all of the current user's todos.
  //    */
  //   abstract getTodos(): ressponse[];
  // }





















// export class User {
//     constructor(

//         // public name:string,
//         // public email: string,
//         // public password:string,
//         // public mobile: string,
//         // public city: string,
//         // public address: string,
       
//         // public state: string,
//         // public lat: string,
//         // public long: string,
//         // public IEMI: string,
//         // public deviceId: string
        

//     ){}
// }

// export class Userlogin {
//     constructor(
        
//         public email: string,
//         public password:string,
       
        

//     ){}
// }


//     "name": "sanjay patidar",
//     "email": "sanjaypatidar402@gmail.com",
//     "city": "indore",
//     "address": "201  ,bhagya rekha apart",
//     "mobile": "9691889808",
//     "state": "mp",
//     "lat": "2",
//     "long": "12",
//     "IEMI": "4564646465464",
//     "password": "patidar@96",
//     "deviceId": "454654654654"


// Singupservice( user : any)
// {
//     const body = JSON.stringify(user);
//     const header = new Headers();
//     header.append("content-Type", "application/json" );
//     console.log( body );
//     return this._http.post('https://sheltered-woodland-33544.herokuapp.com/signupWebService' , body ,{ headers:header })
//     .pipe(
//       map( ( response : Response ) => response.json() ),
//       catchError( ( error: any ) => throwError( error.json() || 'server error'))
//     );
//     console.log(body);
// }


// import { Injectable } from '@angular/core';
// import {Response, Headers, Http } from "@angular/http";
// import {HttpClient} from '@angular/common/http';
// import { throwError, from } from 'rxjs';
// import { map , catchError } from 'rxjs/operators';