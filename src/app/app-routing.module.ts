import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuComponent } from './listu/listu.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
 // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path : '', component :  LoginComponent },
  { path : 'menu', component :  MenuComponent , canActivateChild: [],
  children: [
    { path: '', component: ListuComponent, pathMatch: 'full' },
    { path: 'listu', component: ListuComponent }
  ]  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
