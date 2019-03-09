import { Component, OnInit } from '@angular/core';
import {Myservice} from '../my.service';
import { Router, ActivatedRoute } from '@angular/router';
import { table } from './table'

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
    console.log('hello')
    console.log(localStorage.getItem('id'))
    this.myservice.cartAddproduct(this.userModel)
    .subscribe(res=>{
      console.log(res)
    })
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
      console.log('this is localstorage',localStorage.getItem('id'))
      console.log(res)
    })
  }


}
