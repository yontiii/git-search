import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:"search",component:UsersComponent},
  {path:"home",component:LandingComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
