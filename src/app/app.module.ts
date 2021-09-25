import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { UserService } from './services/user.service';
import { ErrorService } from './services/error.service';
import { VaultService } from './services/vault.service';

import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpConfigInterceptor} from './app-httpconfig.interceptor';
import { ErrorComponent } from './error/error.component';

import { EventComponent } from './event/event.component';

import { CardsUserComponent } from './user/cards-user/cards-user.component';
import { CardEditVolunteerComponent } from './user/card-edit-volunteer/card-edit-volunteer.component';
import { CardEditBeneficiaryComponent } from './user/card-edit-beneficiary/card-edit-beneficiary.component';
import { CardEditProviderComponent } from './user/card-edit-provider/card-edit-provider.component';

import { CardVaultComponent } from './vault/card-vault/card-vault.component';
import { CardDetailVaultComponent } from './vault/card-detail-vault/card-detail-vault.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    CardsUserComponent,
    ErrorComponent,
    CardEditProviderComponent,
    EventComponent,
    CardEditVolunteerComponent,
    CardEditBeneficiaryComponent,
    CardVaultComponent,
    CardDetailVaultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    FormsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    
  ],
  providers: [
              UserService,
              VaultService,
              ErrorService,
              { provide: HTTP_INTERCEPTORS, useClass: AppHttpConfigInterceptor, multi: true }
            ],

  entryComponents: [ErrorComponent],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
