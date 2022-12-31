import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LserviceService } from '../lservice.service';
import { MenuComponent } from '../menu/menu.component';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User=new User();
  constructor(private lserviceService: LserviceService,private route:Router,private location:Location) { }

  ngOnInit(): void {
  }

 /* userlogin() {
    console.log(this.user)
    this.lserviceService.loginuser(this.user).subscribe(data=>{
      alert("login succesfully");
      if(this.user.username == "ablo" && this.user.password=="ablo"){
        this.route.navigate(['/menu']);
      }
    },error=>alert("error"));
   
    
  }*/

  userlogin() {
    console.log(this.user)
    if(this.user.username == "ablo" && this.user.password=="ablo"){
      this.route.navigate(['/menu']);
     // this.location.go('/menu');
    }else{
      console.log("error");
    }
  }

}
