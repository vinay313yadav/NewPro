import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service';
import {Router} from "@angular/router";
import { profile } from './headdd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
res : profile [] = [];
profile: any;

  constructor( private myservices : Myservice, private router: Router) { }

  userModel= {id:localStorage.getItem('id'), token:localStorage.getItem('token') }

  ngOnInit() {
    
  }



  OnSubmit()
  {
     this.myservices.Profilepic()
     .subscribe ( (res) => {

      this.profile=res
      console.log(this.profile[0]._id); 
      console.log('this is name key' , this.profile[0].name); 
       console.log(res);
       localStorage.getItem('id');
       console.log(localStorage.getItem('id'));
       localStorage.getItem('token')
       console.log(localStorage.getItem('token'));

       this.router.navigate(['editProfile']);
     },
       error => {
    console.log("Error in recieving data"); 
  }
     );
  }


  ngSubmit(){
    this.myservices.cartViewproduct()
    .subscribe(res=>{
      this.router.navigate(['cartdata']);
      console.log(res)
    })
  }

}
