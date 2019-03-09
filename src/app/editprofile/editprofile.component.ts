import { Component, OnInit } from '@angular/core';
  import { from } from 'rxjs';
import { Myservice } from '../my.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { proedit} from './editpro'

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  res : proedit [] = [];
  proedit: any;

  constructor(private myservices: Myservice, private formBuilder: FormBuilder) { }

  userModel = {name:'', email:'', city:'', address: '', mobile:'',   id:localStorage.getItem('id')}

  ngOnInit() {

    this.myservices.Profilepic()
    .subscribe ( (res) => {

   this.proedit = res
     console.log(this.proedit[0]._id); 
     console.log('this is name key' , this.proedit[0].address); 

      this.userModel = {name:this.proedit[0].name, email:this.proedit[0].email, city:this.proedit[0].city, address:this.proedit[0].address, mobile:this.proedit[0].mobile, id:localStorage.getItem('id')}
    },
      error => {
   console.log("Error in recieving data"); 
 }
    );
  }

  //userModel = {name:this.proedit[0].name, email:this.proedit[0].email, city:this.proedit[0].city, mobile:this.proedit[0].mobile ,   id:localStorage.getItem('id')}

  onSubmit()
  {
    this.myservices.EditProfilepic(this.userModel)
    .subscribe( res => {
      console.log(res)
      console.log(localStorage.getItem('id'));
    });
  }

}
