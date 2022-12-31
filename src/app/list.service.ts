import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  //private baseUrl='./listu.component.html';
  constructor(private httpClient: HttpClient, private route:Router) { }
 list(hero:Hero):Observable<object>{
    console.log(hero)
      const heroes = [
        { username: hero.username, password:hero.password },
      ];
      return this.httpClient.post('${this.baseUrl}',heroes);
    
  }

}
