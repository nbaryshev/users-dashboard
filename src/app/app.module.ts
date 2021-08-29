import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewUserComponent } from './dashboard/new-user/new-user.component';
import { UserComponent } from './dashboard/user/user.component';
import { ProfileViewComponent } from './dashboard/profile-view/profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewUserComponent,
    UserComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
