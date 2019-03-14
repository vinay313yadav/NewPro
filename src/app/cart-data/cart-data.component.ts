import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.css']
})
export class CartDataComponent implements OnInit {

rzp1:any;
table:any;
total:any;
prommoo:any;
public Table:Array<any> = [];



  constructor(private myservices: Myservice, private route: ActivatedRoute,
    private router: Router, public authService: AuthService,) { }

ngOnInit() {
this.myservices.cartViewproduct() 
.subscribe(res=>{
  this.table = res
  this.table[0].total=0
  for(let i=0; i<this.table.length; i++){
    // this.table[i].Quentity=1
  
     this.table[i].discountprice=this.table[i].price*(100-this.table[i].discount)/100 
     console.log('++++++++++++++++++++++',this.table[i].discountprice)
    
    if(i==0){
      this.table[i].total=parseInt(this.table[i].price)
      this.table[i].discounttotal=parseInt(this.table[i].discountprice)
      // console.log(this.table[i].discounttotal,"ssssssssssssssssssssssssssssssssssss")  
    }else{
      this.table[i].total=this.table[i-1].total+parseInt(this.table[i].price)
      this.table[i].discounttotal=this.table[i-1].discounttotal+parseInt(this.table[i].discountprice)
      // console.log(this.table[i].total)
    }   
}
for(let i=0; i<this.table.length; i++){
  this.table[i].total=this.table[this.table.length-1].total
  this.table[i].discounttotal=this.table[this.table.length-1].discounttotal
  // console.log(this.table[i].discounttotal,"+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_")
  // console.log(this.table)
}  
})
  }


  userModel = {promocode:''}


  onSubmit(){
    this.myservices.cartviewpromocode(this.userModel)
    .subscribe(res=>{
      this.table = res
      this.table[0].total=0
     this.prommoo = res
     console.log('this is promocode',this.prommoo)
     console.log('+++++++++++++++',this.prommoo[0].pcodedis)
         
    })
  }

addItem(obj, type){
    if(type == '+'){
obj.Quentity += 1
 obj.price= parseInt(obj.price)*obj.Quentity/(obj.Quentity-1)
  obj.total=obj.total+obj.price/obj.Quentity
  obj.discountprice= parseInt(obj.discountprice)*obj.Quentity/(obj.Quentity-1)
  obj.discounttotal=obj.discounttotal+obj.discountprice/obj.Quentity
  
  
  for(let i=0; i<this.table.length; i++){
    this.table[i].total=obj.total
    this.table[i].discounttotal=obj.discounttotal
    
    console.log(this.table[i].discounttotal,"+++++++++++++++++++++")
    
  }
    }else{
      if(obj.Quentity==1){
      }else{
        obj.Quentity -= 1
        obj.price= parseInt(obj.price)*(obj.Quentity)/(obj.Quentity+1)
        obj.total=obj.total-obj.price/obj.Quentity

        obj.discountprice= parseInt(obj.discountprice)*obj.Quentity/(obj.Quentity+1)
        obj.discounttotal=obj.discounttotal-obj.discountprice/obj.Quentity
        
        for(let i=0; i<this.table.length; i++){
          this.table[i].total=obj.total
          this.table[i].discounttotal=obj.discounttotal
          console.log(this.table[i].discounttotal,"------------------------------------")
        }
        
      }
    }
  }

  onclear(id)
  {
   const i = this.myservices.cartProductclearrow(id)
    .subscribe(res=>{
     console.log(res,"++++++++++++++++++++++++++")
      this.table = res
      console.log(this.table)
     this.table.splice(id,0)
     location.reload();
    })
  }

  onallclear()
  {
    this.myservices.cartclear()
    .subscribe(res=>{
      console.log(res)
      location.reload();
})  
}

onupdate(data){
  this.myservices.updatecart(data)
  .subscribe(res=>{
    console.log(res)
    alert('Your data is update')
  })
}

logout(): void {
  console.log("Logout");
  this.authService.logout();
  this.router.navigate(['']);
}

  

}
