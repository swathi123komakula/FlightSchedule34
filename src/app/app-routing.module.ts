
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'  



import { ScheduledflightComponent } from './scheduledflight/scheduledflight.component';
import { ViewscheduleflightComponent } from './viewscheduleflight/viewscheduleflight.component';
import { UpdatescheduleflightComponent } from './updatescheduleflight/updatescheduleflight.component';

import { SearchscheduledflightComponent } from './searchscheduledflight/searchscheduledflight.component';

const routes: Routes = [
  
  {path: 'app-scheduledflight', component:ScheduledflightComponent},
  {path: 'app-viewscheduleflight', component:ViewscheduleflightComponent},
  {path: 'app-updatescheduleflight', component:UpdatescheduleflightComponent},
 
  {path: 'app-searchscheduledflight', component:SearchscheduledflightComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule,  
  ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }