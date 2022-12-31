import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LserviceService } from '../lservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private lserviceService:LserviceService, private route: Router) { }

  ngOnInit(): void {
  }

}
