import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../app.services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private appServices : AppServices, private router : Router) { }
  currentpassword : any;
  newpassword : any;
  updatedpassword : any;
  result : any;
  ngOnInit() {
  }

  changePasswordNew(){
    if(!this.currentpassword){
      alert("Please Enter Current Password")
    }else if(!this.newpassword){
      alert("Please Enter New Password")
    }else{
      this.updatedpassword={
        password : this.currentpassword ,
        newPassword : this.newpassword
      }
    };

    this.appServices.changePassword(this.updatedpassword).subscribe(
      (res: any)=>{
        this.result = res;
        console.log('this.result', this.result)
        localStorage.clear();
        this.router.navigate(['/login'])
        if(this.result){
          Swal.fire({
            title: 'success',
            text: this.result.message,
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
