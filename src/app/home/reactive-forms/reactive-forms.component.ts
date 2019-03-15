import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppServices } from '../../app.services';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  register: FormGroup;
    submitted = false;
    profiledata : any;
  constructor(private formBuilder: FormBuilder, private appServices : AppServices) { }

  ngOnInit() {
    this.register = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  this.userprofile();
  }
  get f() { return this.register.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.register.invalid) {
          return;
      }
      console.log('this.register', this.register)
      alert('SUCCESS!! :-)')
  }
    //get profie data from backend 
    userprofile(){
      this.appServices.userProfile().subscribe(
        (res:any)=>{
          console.log(res)
          this.profiledata = res.data; 
          this.register.controls['firstName'].patchValue(this.profiledata.name.first);
          this.register.controls['lastName'].patchValue(this.profiledata.name.last);
          this.register.controls['email'].patchValue(this.profiledata.email);
          this.register.controls['password'].patchValue(this.profiledata.mobile.number);
      })}
  
  
}
