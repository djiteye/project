import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { ListService } from '../list.service'; 
import { Hero } from '../hero';


@Component({
  selector: 'app-listu',
  templateUrl: './listu.component.html',
  styleUrls: ['./listu.component.scss']
})
export class ListuComponent implements OnInit {
  hero: Hero=new Hero();
  constructor(private listService:ListService,private route:Router) { }
  ngOnInit(): void {
  }

  list() {
    console.log(this.hero);
    this.listService.list(this.hero).subscribe(data=>{
      alert("login succesfully");
     return this.route.navigate(['/menu']);
    },error=>alert("error"));
   
    
  }
 
  getlist(){
    console.log(this.hero);
    const heroes = [
      { username: this.hero.username, password: this.hero.password }
    ];
    return heroes;
  }

 /* list() {
    console.log(this.user)
    if(this.user.username == "ablo" && this.user.password=="ablo"){
      this.route.navigate(['/menu']);
     // this.location.go('/menu');
    }else{
      console.log("error");
    }
  }*/
}
