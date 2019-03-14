import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 import { Myservice } from '../my.service';
 import { Router, ActivatedRoute } from '@angular/router';
 import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
otp:any;
  constructor(

    private myServices : Myservice,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) { }

  userModel = {mobile:""}
  usermoddelll = {otp:'', id:localStorage.getItem('id')}

  ngOnInit() {
  }

  onSubmit()
  {
    console.log('HEllo Mobile No')
    this.myServices.ForgotPass1(this.userModel)
    .subscribe(res=>{
   alert('Pls Check ...and Submit Valide OTP Number')
   this.otp = res
   localStorage.setItem("id",this.otp._id);
   console.log('this is res variable', this.otp.email)
      console.log(res)
    },
    error => {
      console.log(error);
      alert('Enter Your Valied Mobile Number')
    }
    );
  }

  ngSubmit(id)
  {  
   this.myServices.OTPForget(this.usermoddelll)
    .subscribe(res=>{
      this.otp = res
      console.log('this is res variable', this.otp._id)
      this.router.navigate(['/changePass']);
      console.log(res)
    },
    error => {
      console.log("Error in recieving data"); 
      alert('Submit Your Valide Otp')

    }
    )
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['']);
  }
  
}
