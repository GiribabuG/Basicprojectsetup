import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../../app.services';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-update-userdetails',
  templateUrl: './update-userdetails.component.html',
  styleUrls: ['./update-userdetails.component.css']
})
export class UpdateUserdetailsComponent implements OnInit {

  constructor(private appServices : AppServices, private router : Router, private activatedRoute : ActivatedRoute ) { }
  userid : any;
  profiledata: any;
  profileupdated :any;
  updateddata : any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.userid = params['id'];
      console.log('userid',this.userid)
    })
    this.updateprofile();
  }
  
  profile ={
   
      first:"",
      last:"",
      email:"",
      phone:""
  }


  updateprofiles(){
    this.profileupdated ={
      name:{
        first : this.profile.first,
        last : this.profile.last
      },
      email :this.profile.email,
      mobile :{
        number : this.profile.phone
      }
    }
    this.appServices.UpdateUserDetails(this.userid,this.profileupdated).subscribe(
      (res=>{
        this.updateddata= res;
        console.log("updated",this.updateddata)
      })
    )
  }

updateprofile(){
  this.appServices.adminUpdateUserDetails(this.userid).subscribe(
    (res:any)=>{
      this.profiledata = res.data;
      console.log('profiledata', this.profiledata)
      this.profile.first = this.profiledata.name.first;
      this.profile.last  = this.profiledata.name.last;
      this.profile.email = this.profiledata.email;
      this.profile.phone = this.profiledata.mobile.number;
    }
  )
}
}
