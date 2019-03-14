import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service'
import { result } from './user';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { template } from '@angular/core/src/render3';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
 res : result [] = []; 
 //myForm: FormGroup;
 submitted = false;

  myarray = new Array();
  closeResult: string;
  response: any;
  body: any;
  responseType: any
  DataResponse: any;
  templet: string;
  templet2 : string;
  _id: any;
  result1 : any;
  

  
  constructor(
   private myServices : Myservice,
 
   private route: ActivatedRoute,
   private router: Router,
 
  
   
  ) { }
 

   userModel= {name:"",email: "",password: "",mobile:"",city:"", address:"asassa", state:"sasa", lat:"1212", long: "2121", IEMI:"1000", deviceId:"122332"};

  
  ngOnInit() {

 

  }



onSubmit() {

console.log(this.userModel)

this.myServices.Singupservice(this.userModel)
.subscribe(
 (res) => {
    this.response=res;
    console.log(this.response);
    console.log(this.response.result[0]._id); 
    console.log(this.response.token);
    localStorage.setItem('token', this.response.token);
    
    localStorage.setItem("name",this.response.result[0].name);
    localStorage.setItem("email",this.response.result[0].email);
    localStorage.setItem("mobile",this.response.result[0].mobile);
    localStorage.setItem("id",this.response.result[0]._id);
    localStorage.setItem('city', this.response.result[0].city);
    localStorage.setItem('password', this.response.result[0].password);

    this.router.navigate(['otp']);
   
    

    console.log('localstorage save id',localStorage.getItem('id'));
   console.log('localstorage save name',localStorage.getItem('name'));
   console.log('localstorage save email',localStorage.getItem('email'));
   console.log('localstorage save mobile',localStorage.getItem('mobile'));
   console.log('localstorage save token',localStorage.getItem('token'));
  },
  error => {
    console.log("Error in recieving data"); 
    alert('Firsty Submit this form')
 
  }
);



}



// open(content) {
//   this.modalService.open(content)
// }

// private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//     return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     return 'by clicking on a backdrop';
//   } else {
//     return  `with: ${reason}`;
//   }
// }

}
  


// /onSubmit = function (user) {
//   console.log(user);

//   var body = "&name=" + user.name + "&email=" + user.email + "&password=" + user.password + "&mobile=" +   user.mobile +"&city=" +   user.city;
//   this.http.post("http://localhost:30001/notes/create", body).subscribe((data) => {});



//   console.log(this.myForm.valid );
//   console.log( data );
//   console.log("hello");
//   if( this.myForm.valid ){
//     console.log(data)
//     this.myServices.senddata(data)
//     .subscribe(
//       data => {
//         console.log("hello");
//         console.log( data );
//       },
//       error => {
//         console.log("data");
//       }
//     );
// } else {
//   Object.keys( this.myForm.controls ).forEach( field => {
//     let control = this.myForm .get( field );
//     control.markAsTouched({ onlySelf : true});
//   });
// }








// import { Injectable } from '@angular/core';
// import { Http, Response, Headers } from "@angular/http";
// import { map, catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';  


// @Injectable()
// export class Myservice {
//     constructor(private _http : Http) { }

//     senddata( user: any )
//     {
//         const body = JSON.stringify(user);
//         const header = new Headers();
//         header.append("content-Type", "application/json" );
//         console.log( body );
//         return this._http.post("" , body ,{headers: header})
//         .pipe(
//             map(( response: Response ) => { console.log( response ); response.json() }),
//             catchError( ( error: any ) => throwError( error.json() || 'Server error') )
//         );

//     }

//     getdata()
//      {
//         return this._http.get("")
//             .pipe(map((response: Response) => { console.log(response); response.json(); }),
//              catchError((error: any) => throwError(error.json() || 'Server error')));
//     }
// }
