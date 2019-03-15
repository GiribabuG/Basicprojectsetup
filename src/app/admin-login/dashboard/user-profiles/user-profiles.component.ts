import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServices } from '../../../app.services';
@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {


  constructor(private router : Router, private activatedRoute : ActivatedRoute, private appServices : AppServices) { }
  userid : any;
userDeails : any;
removeuser

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.userid = params['id'];
      console.log('userid',this.userid)
    })
    this.userProfiles();
  }

userProfiles(){
  this.appServices.adminViewDetails(this.userid).subscribe(
    (res:any)=>{
      this.userDeails = res.data;
      console.log('userDeails', this.userDeails)
    }
  )
}

deleteProfile(){
  this.appServices.DeleteUser(this.userid).subscribe(
    (res:any)=>{
      this.removeuser = res;
      console.log("delete", this.removeuser)
      if(this.removeuser.status){
        this.router.navigate(['/dashboard/users-list'])
      }
    }
  )
}
}
