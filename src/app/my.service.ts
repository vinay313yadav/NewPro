import { Injectable } from '@angular/core';
//import {Response, Headers } from "@angular/http";
//import { Http, Headers, Response, RequestOptions,  } from '@angular/http';
import {HttpClient, HttpHeaders,  HttpRequest} from '@angular/common/http';





@Injectable({
    providedIn: 'root'
  })
  export class Myservice {
    token : string;
    headers : any;

    constructor(private http : HttpClient) { }

  

    Singupservice( user)
    {
      const header = new HttpHeaders();
      header.append("content-Type", "application/json");
      //header.append("Authorization",localStorage.getItem( 'token') );
      console.log(user);
        return this.http.post('https://sheltered-woodland-33544.herokuapp.com/signupWebService' , user)
    }

  
  Otpservice( user)
  {
    const body = JSON.stringify(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log(body);
   console.log('asdasdasd',httpOptions,'headervalue',localStorage.getItem('token'))
    return this.http.post('http://sheltered-woodland-33544.herokuapp.com/otp' , user , httpOptions  )

  }

  OtpResendservice( user)
  {
    const body = JSON.stringify(user)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log( body );
    return this.http.post("https://sheltered-woodland-33544.herokuapp.com/otp/resendotp", user, httpOptions)
  }

  loginservice( user)
{
  const body = JSON.stringify(user);
    const header = new HttpHeaders();
    header.append("content-Type", "application/json");
    console.log( body );
    return this.http.post('https://sheltered-woodland-33544.herokuapp.com/loginWebService' , user, )
}


Profilepic()
{
  const idd = localStorage.getItem('id');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('token')
    })
  };
   //console.log( localStorage.getItem( 'token') );
   return this.http.get('http://sheltered-woodland-33544.herokuapp.com/profile/edit/' + idd, httpOptions)
}


EditProfilepic(user)
{
  const body = JSON.stringify(user)
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('token')
   
    })
  };
console.log(localStorage.getItem('token'));
  console.log(body);
  console.log(httpOptions);
  return this.http.post('http://sheltered-woodland-33544.herokuapp.com/updateprofile',user,  httpOptions)

}


// indexapi(id)
// {
//   const idd = localStorage.getItem('id');
//   return this.http.get('http://sheltered-woodland-33544.herokuapp.com/subscription/'+idd+"/"+id )
// }


CartService()
{
  const idd = localStorage.getItem('id');
  return this.http.get('http://sheltered-woodland-33544.herokuapp.com/subscription/'+idd)
}

ViewProduct()
{

  return this.http.get('http://sheltered-woodland-33544.herokuapp.com/admin_viewproduct')
}

ForgotPass1(user){
  const body = JSON.stringify(user)
  console.log(body)
  return this.http.post('http://sheltered-woodland-33544.herokuapp.com/forgotpassword' ,user)
}

OTPForget(user){
  const body = JSON.stringify(user)
  console.log(body)
  return this.http.post('http://sheltered-woodland-33544.herokuapp.com/forgotpassword/otp' , user)
}

ChangePass(user){
  const body = JSON.stringify(user)
  console.log(body)
  return this.http.post('http://sheltered-woodland-33544.herokuapp.com/forgotpassword/reset', user)
}


///////////////////////////////Cart_API_THERE////////////////////////////////////////////////////////////////////////

cartAddproduct(users)
{
  const iid = localStorage.getItem('id')
  console.log(iid)
  const body = JSON.stringify(users)
  console.log('-----------------------',body, '++++++++++++++++++++++++++++++++++++')

  const fb  = new FormData();
  fb.append('productid',users._id)
  fb.append('category',users.category)
  fb.append('discount',users.discount)
  fb.append('image',users.image)
  fb.append('name',users.name)
  fb.append('price',users.price)
 
  fb.append('userid',iid)
  
   return this.http.post('http://sheltered-woodland-33544.herokuapp.com/subscription', fb)
}




updatecart(users)
{
  const iid = localStorage.getItem('id')
  console.log(iid)
  const body = JSON.stringify(users)
  console.log('-----------------------',body, '++++++++++++++++++++++++++++++++++++')
  const fb  = new FormData();
  fb.append('productid',users.productid)
  fb.append('discounttotal', users.discounttotal)
  // localStorage.setItem('dis', users.discounttotal)
  fb.append('category',users.category)
  fb.append('discount',users.discount)
  fb.append('image',users.image)
  fb.append('name',users.name)
  fb.append('price',users.price)
  fb.append('userid',iid)
  fb.append('Quentity', users.Quentity)
  fb.append('total', users.total)
  console.log('++++___------',users.productid)
  
   return this.http.post('http://sheltered-woodland-33544.herokuapp.com/subscription', fb)
}




 cartViewproduct()
 {
   return this.http.get('http://sheltered-woodland-33544.herokuapp.com/subscription/'+localStorage.getItem('id'))
 }

 cartProductclearrow(user)
 {
   const body = JSON.stringify(user)
   const iid = localStorage.getItem('id')
   console.log(body)
   return this.http.post('http://sheltered-woodland-33544.herokuapp.com/subscription/clear', user)
 }

 cartclear()
 {
  const fb  = new FormData();
  fb.append('userid',localStorage.getItem('id'))
    return this.http.post('http://sheltered-woodland-33544.herokuapp.com/subscription/clearcart', fb)
 }

 cartviewpromocode(user)
 {
   return this.http.post('http://sheltered-woodland-33544.herokuapp.com/viewpromo/findpromo',user)
 }




   
}










// +++++++++++++++++++++++++++  signup form schema ++++++++++++++++++++++++++++     {
//     "name": "sanjay patidar",
//     "email": "sanjaypatidar402@gmail.com",
//     "city": "indore",
//     "address": "201  ,bhagya rekha apart",
//     "mobile": "9691889808",
//     "state": "mp",
//     "lat": "2",
//     "long": "12",
//     "IEMI": "4564646465464",
//     "password": "patidar@96",
//     "deviceId": "454654654654"
// } +++++++++++++++++++++++++++ signup api - https://sheltered-woodland-33544.herokuapp.com/signupWebService
// +++++++++++++++++++++++++++    login api - https://sheltered-woodland-33544.herokuapp.com/loginWebService

// +++++++++++++++++++++++++++     otp-https://sheltered-woodland-33544.herokuapp.com/otp                   
// ++++++++++++++++++++++++++++   resendotp-https://sheltered-woodland-33544.herokuapp.com/otp/resendotp
