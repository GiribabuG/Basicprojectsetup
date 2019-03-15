import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['/admin'])
    Swal.fire({
      title: 'success',
      text: 'successfully LogOut',
      type: 'success',
    })
  }
}
