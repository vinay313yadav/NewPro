import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient, HttpHeaders,  HttpRequest} from '@angular/common/http';
 import { WindowRef } from './WindowRef';
 import { AuthService } from '../auth.service';
 declare var Razorpay: any; 

@Component({
  selector: 'app-discription',
  templateUrl: './discription.component.html',
  styleUrls: ['./discription.component.css']
})
export class DiscriptionComponent implements OnInit {
  rzp1:any;
table:any;
total:any;
prommoo:any;
public Table:Array<any> = [];

  constructor(private myservices: Myservice, private route: ActivatedRoute,
    private router: Router, private winRef: WindowRef, private http : HttpClient, public authService: AuthService) { }

  ngOnInit() {
    this.myservices.CartService()
    .subscribe(res=>{
      this.table = res;
      console.log('+++++++', this.table[0].discounttotal)

      console.log(res)
    })
  }
 // pay_C6tAUqZUM3rsS8

 orderhistory(response){
   const body  = JSON.stringify(response)
   const fb  = new FormData();
   fb.append('paymentid',response.razorpay_payment_id)
   fb.append('userid', localStorage.getItem('id'))
  //  fb.append('discounttotal',discounttotal)
   console.log('++++', response.razorpay_payment_id)

  return this.http.post('http://sheltered-woodland-33544.herokuapp.com/order', fb)
  .subscribe(res=>{
    console.log(res)
  });
 }

onallsubmit(){
  var options = {
    "key": "rzp_test_dveDexCQKoGszl",
    "amount":this.table[0].discounttotal*100,
    "name": " MARKET",
    "description": "Order #",
   
    "handler": this.orderhistory.bind(this)
    // function (response){
  
    // console.log(response);
    //     alert(response.razorpay_payment_id);
    //    },
    ,
    "notes": {  },
    "theme": {
        "color": "blue"
    }
};
var rzp1 = new Razorpay(options);
rzp1.open();
} 
paid(){
  alert();
}



logout(): void {
  console.log("Logout");
  this.authService.logout();
  this.router.navigate(['']);
}

}
