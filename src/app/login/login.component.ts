import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 import { Myservice } from '../my.service';
 import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myarray = new Array();
registerForm: FormGroup;
  public myForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
     private myServices : Myservice,
     private route: ActivatedRoute,
     private router: Router,
  ) { }

  userModel = {mobile:"", password: ""}
  
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userModel)
    this.myServices.loginservice(this.userModel)
    .subscribe(
      data => {
        this.router.navigate(['/index']);
        console.log(data);
        console.log("hello");
      },
      error => {
        console.log(error);
      }
    );
    }

    ngSubmit()
    {
      this.router.navigate(['singup']);
    }

    nFSubmit()
    {
      this.router.navigate(['forgotPass']);
    }

}



// senddata( user)
//     {
      
//         //const body = JSON.stringify(user);
//         const header = new Headers();
//         header.append("content-Type", "application/json" );
//         console.log( user );
//         return this._http.post(' http://sheltered-woodland-33544.herokuapp.com/signupWebService ' , user )
//     }
