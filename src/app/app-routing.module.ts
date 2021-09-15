import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsUserComponent} from '../app/user/cards-user/cards-user.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import {CardEditProviderComponent}  from '../app/user/card-edit-provider/card-edit-provider.component';
import { CardEditVolunteerComponent } from './user/card-edit-volunteer/card-edit-volunteer.component';
import {CardEditBeneficiaryComponent} from '../app/user/card-edit-beneficiary/card-edit-beneficiary.component';


/*ALL ROUTING MODULES FOR FOODBANK*/
const routes: Routes = [

  { path: 'user', component: CardsUserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'editprovider/:id', component: CardEditProviderComponent},
  { path: 'editvolunteer/:id', component: CardEditVolunteerComponent},
  { path: 'editbeneficiary/:id', component: CardEditBeneficiaryComponent},
  
  
   //{ path: '**', component: PageNotFoundComponent },  hay q ponerlo luego 
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
