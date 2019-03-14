import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service'
 import { Router, ActivatedRoute } from '@angular/router';
 import { AuthService } from '../auth.service';

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
   public authService: AuthService
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
       alert('Your OTP is Success pls Log-in ')
      this.router.navigate(['']); 
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

    logout(): void {
      console.log("Logout");
      this.authService.logout();
      this.router.navigate(['']);
    }

}
