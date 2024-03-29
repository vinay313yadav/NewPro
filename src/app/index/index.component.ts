import { Component, OnInit } from '@angular/core';
import {Myservice} from '../my.service';
import { Router, ActivatedRoute } from '@angular/router';
import { table } from './table';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  res : table [] = [];
  table: any;

  constructor(
    private myservice: Myservice,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
    ) { }

  ngOnInit() {

    this.myservice.ViewProduct()
    .subscribe(res =>{
      this.table = res
      console.log('this is table', this.table)
      console.log('this is table', this.table[0].name)
   console.log(res);
    })
     

  }
  userModel = {name:'', email:'', mobile:'', address: '', number: '',  userid:localStorage.getItem('id')}
  userMOdell = { userid:localStorage.getItem('id')}


  onSubmit(){

    this.router.navigate(['/fromcat']);

    // console.log('hello')
    // console.log(localStorage.getItem('id'))
    // this.myservice.cartAddproduct(this.userModel)
    // .subscribe(res=>{
    //   console.log(res)
    //   alert('Your Order is save add cart')
    // },
    // error=>{
    //   alert('pls wait some error in submit data')
    // }
    // );
  }

  // onORdeer(id)
  // {
  //   this.myservice.indexapi(id)
  //   .subscribe(res =>{
  //     //this.router.navigate(['/cartdata']);
  //     console.log(res)
  //   })
  // }


  onAddCart(data)
  {
    console.log('++++++++++++++++',data)
    this.myservice.cartAddproduct(data)
    .subscribe(res => {
      alert('This Data Add to cart...')
      console.log('this is localstorage',localStorage.getItem('id'))
      console.log(res)
    })
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['']);
  }


}
