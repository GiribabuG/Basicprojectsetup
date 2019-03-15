import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../app.services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private appServices : AppServices, private router : Router) { }
  profiledata : any;
  profileres = {
    first :"",
    last :"",
    countryCode :"",
    number :"",
    email :"",
  };


  ngOnInit() {
    this.userprofile();
  }
userprofile(){

  this.appServices.userProfile().subscribe(
    (res:any)=>{
      console.log(res)
      this.profiledata = res.data;
      console.log('this.profiledata',this.profiledata);
      this.profileres.first = this.profiledata.name.first,
      this.profileres.last = this.profiledata.name.last,
      this.profileres.countryCode = this.profiledata.mobile.countryCode,
      this.profileres.number = this.profiledata.mobile.number,
      this.profileres.email = this.profiledata.email
      if(this.profiledata.status){
        Swal.fire({
          title: 'success',
          text: this.profiledata.message,
          type: 'success',
        })
      }
    },
    err=>{
      console.log(err)
    }
  )
}
logout(){
  localStorage.clear();
  this.router.navigate(['/home'])
  Swal.fire({
    title: 'success',
    text: "successfully logout",
    type: 'success',
  })
}
}
