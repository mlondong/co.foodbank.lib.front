import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CardsUserComponent} from './user/cards-user/cards-user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardEditProviderComponent}  from './user/card-edit-provider/card-edit-provider.component';
import { CardEditVolunteerComponent } from './user/card-edit-volunteer/card-edit-volunteer.component';
import {CardEditBeneficiaryComponent} from './user/card-edit-beneficiary/card-edit-beneficiary.component';
import {CardVaultComponent} from './vault/card-vault/card-vault.component';


/*ALL ROUTING MODULES FOR FOODBANK*/
const routes: Routes = [

  { path: 'user', component: CardsUserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'editprovider/:id', component: CardEditProviderComponent},
  { path: 'editvolunteer/:id', component: CardEditVolunteerComponent},
  { path: 'editbeneficiary/:id', component: CardEditBeneficiaryComponent},
  { path: 'vault', component: CardVaultComponent},
  
  
  
   //{ path: '**', component: PageNotFoundComponent },  hay q ponerlo luego 
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
