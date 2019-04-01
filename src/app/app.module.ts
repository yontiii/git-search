import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
const routes:Routes=[
  {path:"users",component:UsersComponent},
  {path:"home",component:LandingComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LandingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
