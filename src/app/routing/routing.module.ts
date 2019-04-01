import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import { LandingComponent } from '../landing/landing.component';
import { UsersComponent } from '../users/users.component';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes:Routes=[
  {path:"home",component:LandingComponent},
  {path:"users",component:UsersComponent},
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
