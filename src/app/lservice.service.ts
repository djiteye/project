import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LserviceService {
  private baseUrl="http::/localhost:8081/user/login";
  constructor(private httpClient: HttpClient, private route:Router) { }
 loginuser(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post('${this.baseUrl}',user); 
  }
  save(User:string):void{
    localStorage.setItem('user', User);
   this.route.navigate(['/menu']);
  }
}
