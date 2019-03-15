import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppServices } from './app.services';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersignupComponent } from './home/usersignup/usersignup.component';
import { UserloginComponent } from './home/userlogin/userlogin.component';
import { UserforgotpasswordComponent } from './home/userforgotpassword/userforgotpassword.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './home/profile/profile.component';
import { TokenInterceptor } from './app.interceptor';
import { ChangepasswordComponent } from './home/changepassword/changepassword.component';


// admin pannel modules
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './admin-login/dashboard/dashboard.component';
import { QuickAtionsComponent } from './admin-login/dashboard/quick-ations/quick-ations.component';
import { ViewUsersComponent } from './admin-login/dashboard/view-users/view-users.component';
import { UserProfilesComponent } from './admin-login/dashboard/user-profiles/user-profiles.component';
import { UpdateUserdetailsComponent } from './admin-login/dashboard/update-userdetails/update-userdetails.component';
import { AuthGuardService } from './auth-guard.service';
import { FileUploadingComponent } from './home/file-uploading/file-uploading.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ReactiveFormsComponent } from './home/reactive-forms/reactive-forms.component';
import { CurrencyConvertorComponent } from './home/currency-convertor/currency-convertor.component';

const router : Routes =[
{path : '',redirectTo:'/home',pathMatch:'full'},
{path : 'home',component : HomeComponent },
{path : 'verify-email/:token',component: HomeComponent},
{path : 'signup',component : UsersignupComponent },
{path : 'login',component : UserloginComponent },
{path : 'forgotpassword',component : UserforgotpasswordComponent },
{path : 'forgotpassword/:token',component : UserforgotpasswordComponent },
{path : 'upload',component : FileUploadingComponent },
{path : 'reactive-forms',component : ReactiveFormsComponent },
{path : 'currency',component : CurrencyConvertorComponent },
// {path : 'profile',component : ProfileComponent },

{path  : 'profile',component: ProfileComponent,
canActivate : [AuthGuardService]
},
{path : 'changepassword',component : ChangepasswordComponent },
// admin pannel routes
{path : 'admin',component : AdminLoginComponent },
{path : 'dashboard',component : DashboardComponent, children : [
  {path : 'quick-actions',component : QuickAtionsComponent },
  {path : 'users-list',component : ViewUsersComponent },
  {path : 'users-profile',component : UserProfilesComponent },
  {path : 'users-profile/:id',component : UserProfilesComponent },
  {path : 'update-userdetails/:id',component : UpdateUserdetailsComponent },

] },

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersignupComponent,
    UserloginComponent,
    UserforgotpasswordComponent,
    ProfileComponent,
    ChangepasswordComponent,
    AdminLoginComponent,
    DashboardComponent,
    QuickAtionsComponent,
    ViewUsersComponent,
    UserProfilesComponent,
    UpdateUserdetailsComponent,
    FileUploadingComponent,
    ReactiveFormsComponent,
    CurrencyConvertorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    AngularFileUploaderModule

  ],
  providers: [AppServices,AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
