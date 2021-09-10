import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsUserComponent} from '../app/user/cards-user/cards-user.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import {UserComponent} from '../app/user/user.component';



/*ALL ROUTING MODULES FOR FOODBANK*/
const routes: Routes = [

  { path: 'user', component: CardsUserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
