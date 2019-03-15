import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { AppServices } from '../../app.services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
]);
confirmFormControl = new FormControl('', [
    Validators.required,
    ]);

     hide =true;

     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
      const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
  
      return (invalidCtrl || invalidParent);
    }
  constructor(private appServices : AppServices,private router : Router ) { }
    firstName : any;
    lastName: any;
    phoneNumber: any;
    countryCode : any;
    gender: any;
    emailId : any;
    password: any;
    conformpassword: any;

    signupdata: any;
    result : any;
    token : any;
  ngOnInit() {
    if(localStorage.getItem('token')){
        this.token = localStorage.getItem('token')
      }
  }
  submit(){
    if(!this.firstName){
        Swal.fire({
            title: 'Error!',
            text: 'Please select first name',
            type: 'error',
          })
    }else if(!this.lastName){
        Swal.fire({
            title: 'Error!',
            text: 'Please select last name',
            type: 'error',
          })
    }else if(!this.phoneNumber){
        Swal.fire({
            title: 'Error!',
            text: 'Please select  phone Number',
            type: 'error',
          })
    }else  if (!this.emailId){
        Swal.fire({
            title: 'Error!',
            text: 'Please select email',
            type: 'error',
          })
    }else if(!this.password){
        Swal.fire({
            title: 'Error!',
            text: 'Please select password',
            type: 'error',
          })
    }else{
        this.signupdata={
            name :{
                first  : this.firstName,
                last  : this.lastName,
            } ,
            mobile :{
            countryCode : this.countryCode,   
            number : this.phoneNumber,
            },
            email     : this.emailId,
            password    : this.password,
        };
        console.log(' this.signupdata',  this.signupdata)
    this.appServices.singUp(this.signupdata).subscribe(
        (res :any)=>{
            this.result = res;
            console.log('this.result', this.result)
            if(this.result.status){
                this.router.navigate(['/login']);
                Swal.fire({
                    title: 'success',
                    text: 'Please Verify your email',
                    type: 'success',
                  })
            }
        },
        err=>{
            console.log(err);
            Swal.fire({
                title: 'Error!',
                text: err.error.message,
                type: 'error',
                confirmButtonText: 'Cool'
              })
        }
    )  
    }
    
   }    
}
