import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 import { Myservice } from '../my.service';
 import { Router, ActivatedRoute } from '@angular/router';

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
   
   this.otp = res
   localStorage.setItem("id",this.otp._id);
   console.log('this is res variable', this.otp.email)
      console.log(res)
    })
  }

  ngSubmit(id)
  {  
   this.myServices.OTPForget(this.usermoddelll)
    .subscribe(res=>{
      this.otp = res
      console.log('this is res variable', this.otp._id)
      this.router.navigate(['/changePass']);
      console.log(res)
    })
  }
  
}
