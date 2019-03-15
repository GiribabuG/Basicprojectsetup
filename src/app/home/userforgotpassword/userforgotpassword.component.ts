import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../app.services';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-userforgotpassword',
  templateUrl: './userforgotpassword.component.html',
  styleUrls: ['./userforgotpassword.component.css']
})
export class UserforgotpasswordComponent implements OnInit {

  constructor( private appServices : AppServices, private router : Router, private activatedRoute : ActivatedRoute) { }
  token : any;
  emaildata : any;
  email : any;
  result : any;
  result2 : any;
  password : any;
  createPasswordData : any;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.token = params['token'];
    })

    if(this.token){
      localStorage.setItem('token',this.token)
      console.log("token",this.token)
    }

    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token')
    }
  
  }

  emailSubmit(){
    if(!this.email){
      Swal.fire("Enter your email")
    }else{
      this.emaildata ={
        email : this.email
      }
    };

    this.appServices.resetPasswordLink(this.emaildata).subscribe(
      (res)=>{
          this.result = res;
          console.log("result", this.result)
          if(this.result.status){
            Swal.fire({
              type:'success',
              title: 'Verify email',
              text: 'Verification link as been sent your email.',              
            })
            this.router.navigate(['/home'])
          }
      },
      err =>{
        console.log(err)
      }
    )
  }

  createPassword(){
    if(!this.password){
      Swal.fire('Enter your new password')
    }else{
      this.createPasswordData={
        token : this.token,
        password :this.password
      }
    };

    this.appServices.createPassword(this.createPasswordData).subscribe(
      (res)=>{
        this.result2 = res;
        console.log('this.result2' , this.result2)
        if(this.result2.status){
        Swal.fire({
          type:'success',
          title: 'Successfuly Created!',
          text: this.result2.message              
        })
        this.router.navigate(['/login'])
      }
      },
      err =>{
        console.log(err);
      }
    )
  }
}
