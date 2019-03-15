import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../../app.services';
import { Router, ActivatedRoute } from '@angular/router';


Router
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private appServices : AppServices, private router : Router, private activatedRoute : ActivatedRoute) { }
  userDetails : any;
  name : any;
  token : any;
  details : any;
  ngOnInit() {
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token')
    }
    this.allUserDetails();
  }

  allUserDetails(){
    this.appServices.userDetails().subscribe(
      (res: any)=>{
        this.userDetails = res.data;
        console.log('this.result', this.userDetails)
      }
    )
  }
}
