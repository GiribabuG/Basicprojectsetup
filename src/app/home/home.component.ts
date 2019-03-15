import { Component, OnInit } from '@angular/core';
import { AppServices } from '../app.services';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appServices : AppServices, private router : Router, private activatedRoute : ActivatedRoute) { }
  emailToken : any;
  verifyEamilToken : any;
  user : any;
  token: any;
  
  ngOnInit() {

this.activatedRoute.params.subscribe(params=>{
  this.emailToken = params["token"];
  if(this.emailToken){
    this.verifyEmail()
  }
  if(localStorage.getItem('token')){
    this.token = localStorage.getItem('token')
  }
})
}
 
verifyEmail(){
  this.appServices.verifyEmailId(this.emailToken).subscribe(
    (res : any)=>{
      this.user = res;
      console.log('res', this.user)
      if(this.user.status){
        localStorage.setItem('emailToken', this.user.token)
        this.router.navigate(['/home'])
        
      }else{
        alert(this.user.message)
        console.log(this.user.message)
      }
    },
    err=>{
      console.log(err)
    }
  )
}


logout(){
  localStorage.clear();
  this.router.navigate(['/login'])
}
}
