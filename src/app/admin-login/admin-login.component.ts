import { Component, OnInit } from '@angular/core';
import { AppServices } from '../app.services';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor( private appServices : AppServices, private router : Router, private activatedRoute : ActivatedRoute) { }

  adminname : any;
  adminpassword : any;
  admindata : any;
  adminResult : any
  token : any;
  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    } 
  }

  submit(){
    if(!this.adminname){
      alert("Please enter your email")
    }else if(!this.adminpassword){
      alert("Please enter your password")
    }else{
      this.admindata = {
        email : this.adminname,
        password : this.adminpassword
      }
    };

    this.appServices.login(this.admindata).subscribe(
      (res: any)=>{
        this.adminResult = res;
        console.log('this.adminResult', this.adminResult)
        if(this.adminResult.status){
          localStorage.setItem('token', this.adminResult.data.token)
          this.router.navigate(['/dashboard//quick-actions'])
          Swal.fire({
            title: 'success',
            text: this.adminResult.message,
            type: 'success',
          })
        }
       
    
      },
      err=>{
        console.log(err)
        Swal.fire({
          title: 'Error!',
          text: err.error.message,
          type: 'error',
        })
      }
    )
  }
}
