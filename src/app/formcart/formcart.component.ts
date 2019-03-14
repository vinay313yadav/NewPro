import { Component, OnInit } from '@angular/core';
import {Myservice} from '../my.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-formcart',
  templateUrl: './formcart.component.html',
  styleUrls: ['./formcart.component.css']
})
export class FormcartComponent implements OnInit {
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
