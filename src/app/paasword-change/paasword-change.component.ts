import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 import { Myservice } from '../my.service';
 import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paasword-change',
  templateUrl: './paasword-change.component.html',
  styleUrls: ['./paasword-change.component.css']
})
export class PaaswordChangeComponent implements OnInit {
otp:any;
  constructor(
    private myServices : Myservice,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  userModel = {password: "", id:localStorage.getItem('id')}

  ngOnInit() {
  }

  onSubmit()
  {
    this.myServices.ChangePass(this.userModel)
    .subscribe(res=>{
      this.otp = res;
      this.router.navigate(['/index']);
      console.log(res)
    })
  }

}
