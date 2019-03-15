import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../app.services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private appServices : AppServices, private router : Router) { }
  email: any;
  password: any;

  userdata : any;
  result : any;
  token : any;
  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }  
  }
  

  submit(){
    if(!this.email){
      alert("Please enter your email")
    }else if(!this.password){
      alert("Please enter your passwod")
    }else{
      this.userdata = {
        email: this.email,
        password : this.password
      }
    };
    this.appServices.login(this.userdata).subscribe(
      (res:any)=>{
       this.result = res;
       if(this.result.status){
         localStorage.setItem('token', this.result.data.token);
         this.router.navigate(['/profile']);
         Swal.fire({
          title: 'success',
          text: this.result.message,
          type: 'success',
        })
       }
       console.log('this.result', this.result.data.token)
      },
      (err:any)=>{
        console.log(err)
       
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
