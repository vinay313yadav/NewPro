import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service'
 import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {
  myarray = new Array();
  closeResult: string;
  otp:any;
  constructor(
   private myServices : Myservice,
   private route: ActivatedRoute,
   private router: Router,
  ) { }


  userModel= {otp:"", id:localStorage.getItem('id') }

  ngOnInit() {
  }

  onSubmit() {
    //console.log(this.userModel)
    this.myServices.Otpservice(this.userModel)
    .subscribe(
      data => {
     this.otp = data
    //  if(this.otp=="otpsuccess")
    //  {
      this.router.navigate(['/index']); 
      localStorage.getItem('id');
      localStorage.getItem('token')
     // console.log(localStorage.getItem('id'));
   //  }
      },
      error => {
     console.log(error);
      }
    );
    }

    ngSubmit()
    {
      console.log(this.userModel)
      this.myServices.OtpResendservice(this.userModel)
      .subscribe(
        data => {
         // this.router.navigate(['/index']);
          console.log(data);
          console.log("hello");
        },
        error => {
          console.log(error);
        }
      );
    }

}
