import { Component } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user= new User();
  username: string;
  name: string;
  email: string;
  telszam:string

  constructor(
    private router: Router,
    private apiService:ApiService

    ) {
    this.getUser();

    }

  ngOnInit(): void {
  }

  


  getUser(){

    if (this.apiService.getCurrentuser().userName== null){
      this.router.navigate(['/login']);
    }

    this.user=this.apiService.getCurrentuser();
    this.name= JSON.stringify(this.user.name)
    this.username= JSON.stringify(this.user.userName)
    this.email= JSON.stringify(this.user.email)
    this.telszam=JSON.stringify(this.user.telszam)
  }


  logout(){
    this.user= new User()
    this.apiService.setCurrentuser(this.user);
    this.router.navigate(['/login']);
  }



}
