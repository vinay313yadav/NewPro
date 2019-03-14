import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 import { Myservice } from '../my.service';
 import { Router, ActivatedRoute } from '@angular/router';
 import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response:any;
  myarray = new Array();
registerForm: FormGroup;
  public myForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
     private myServices : Myservice,
     private route: ActivatedRoute,
     private router: Router,
     public authService: AuthService
  ) { }

  userModel = {mobile:"", password: ""}
  
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userModel)
    this.myServices.loginservice(this.userModel)
    .subscribe(
      data => {
        this.response = data;
         if(this.response.response=="unsuccess"){
           alert('user name and password is incorect')
         }
         else{

        this.router.navigate(['/index']);
        localStorage.setItem('isLoggedIn', "true");
        this.router.navigate([this.returnUrl]);

        localStorage.setItem('token', this.response.token);
    
        localStorage.setItem("name",this.response.result[0].name);
        localStorage.setItem("email",this.response.result[0].email);
        localStorage.setItem("mobile",this.response.result[0].mobile);
        localStorage.setItem("id",this.response.result[0]._id);
        localStorage.setItem('city', this.response.result[0].city);
        localStorage.setItem('password', this.response.result[0].password);

         }
      },
      error => {
        console.log(error);
      }
    );
    }

    // ngSubmit()
    // {
    //   this.router.navigate(['singup']);
    // }

    // nFSubmit()
    // {
    //   this.router.navigate(['forgotPass']);
    // }

}



// senddata( user)
//     {
      
//         //const body = JSON.stringify(user);
//         const header = new Headers();
//         header.append("content-Type", "application/json" );
//         console.log( user );
//         return this._http.post(' http://sheltered-woodland-33544.herokuapp.com/signupWebService ' , user )
//     }
