import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ServiceComponent } from './service/service.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule } from '@angular/http'
 import { Myservice } from './my.service';
 import { StorageServiceModule} from 'angular-webstorage-service';
 import { WindowRef } from './discription/WindowRef';
 import { AuthGuard } from './auth.guard';


import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { OTPComponent } from './otp/otp.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CartDataComponent } from './cart-data/cart-data.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PaaswordChangeComponent } from './paasword-change/paasword-change.component';
import { FormcartComponent } from './formcart/formcart.component';

import { AlertsModule } from 'angular-alert-module';
import { DiscriptionComponent } from './discription/discription.component';



const appRoutes: Routes = [
  { path: 'index', component: IndexComponent, canActivate: [AuthGuard]  },
  { path: 'service', component: ServiceComponent, canActivate: [AuthGuard]   },
  { path: 'servicedetails', component: ServicedetailsComponent, canActivate: [AuthGuard]  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]  },
  // { path: 'header', component: HeaderComponent,  canActivate: [AuthGuard] },
  {path: 'Contact', component: ContactComponent, canActivate: [AuthGuard] },
  {path: '', component: LoginComponent},
  {path: 'singup', component: SingUpComponent },
  { path: 'otp', component: OTPComponent},
  { path: 'editProfile', component: EditprofileComponent, canActivate: [AuthGuard] },
  { path: 'cartdata', component: CartDataComponent, canActivate: [AuthGuard] },
  { path: 'forgotPass', component: ForgetPasswordComponent},
  { path: 'changePass', component: PaaswordChangeComponent},
  { path: 'discrip', component: DiscriptionComponent, canActivate: [AuthGuard] },
  { path: 'fromcat', component: FormcartComponent, canActivate: [AuthGuard] }
];

// const appRoutes: Routes = [
//   { path: 'index', component: IndexComponent },
//   { path: 'service', component: ServiceComponent  },
//   { path: 'servicedetails', component: ServicedetailsComponent  },
//   { path: 'about', component: AboutComponent },
//   // { path: 'header', component: HeaderComponent,  canActivate: [AuthGuard] },
//   {path: 'Contact', component: ContactComponent },
//   {path: '', component: LoginComponent},
//   {path: 'singup', component: SingUpComponent },
//   { path: 'otp', component: OTPComponent },
//   { path: 'editProfile', component: EditprofileComponent },
//   { path: 'cartdata', component: CartDataComponent },
//   { path: 'forgotPass', component: ForgetPasswordComponent},
//   { path: 'changePass', component: PaaswordChangeComponent},
//   { path: 'discrip', component: DiscriptionComponent},
//   { path: 'fromcat', component: FormcartComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ServiceComponent,
    ServicedetailsComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    LoginComponent,
    SingUpComponent,
    OTPComponent,
    EditprofileComponent,
    CartDataComponent,
    ForgetPasswordComponent,
    PaaswordChangeComponent,
    FormcartComponent,
    DiscriptionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    HttpModule,
    AlertsModule.forRoot()
  
  ],
  providers: [AuthGuard, LoginComponent, SingUpComponent , Myservice, WindowRef, WindowRef  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
