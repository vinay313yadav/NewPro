import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service'

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.css']
})
export class CartDataComponent implements OnInit {
table:any;
total:any;
public Table:Array<any> = [];



  constructor(private myservices: Myservice) { }

  ngOnInit() {
this.myservices.cartViewproduct() 
.subscribe(res=>{
  this.table = res
  this.table[0].total=0
  for(let i=0; i<this.table.length; i++){
    this.table[i].Quentity=1
     this.table[i].price=this.table[i].price*(100-this.table[i].discount)/100 
    if(i==0){
      this.table[i].total+=parseInt(this.table[i].price)
    }else{
      this.table[i].total=this.table[i-1].total+parseInt(this.table[i].price)
      // console.log(this.table[i].total)

    }   
}
for(let i=0; i<this.table.length; i++){
  this.table[i].total=this.table[this.table.length-1].total
  // console.log(this.table)
}

   
})
  }

  addItem(obj, type){
    if(type == '+'){
obj.Quentity += 1
 obj.price= parseInt(obj.price)*obj.Quentity/(obj.Quentity-1)
  obj.total=obj.total+obj.price/obj.Quentity
  console.log(obj.total,"+++++++++++++++++++++++++++++++++")
  for(let i=0; i<this.table.length; i++){
    this.table[i].total=obj.total
    console.log(this.table)
  }
    }else{
      if(obj.Quentity==1){
      }else{
        obj.Quentity -= 1
        obj.price= parseInt(obj.price)*(obj.Quentity)/(obj.Quentity+1)
        obj.total=obj.total-obj.price/obj.Quentity
        console.log(obj.total,"++++++++++++")
        for(let i=0; i<this.table.length; i++){
          this.table[i].total=obj.total
          console.log(this.table)
        }
        
      }
    }
  }

}
