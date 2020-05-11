import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { ScheduledflightComponent } from './scheduledflight/scheduledflight.component';
import { SearchscheduledflightComponent } from './searchscheduledflight/searchscheduledflight.component';
import { UpdatescheduleflightComponent } from './updatescheduleflight/updatescheduleflight.component';
import { ViewscheduleflightComponent } from './viewscheduleflight/viewscheduleflight.component';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { AirportComponent } from './airport/airport.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ScheduledflightComponent,
    SearchscheduledflightComponent,
    UpdatescheduleflightComponent,
    ViewscheduleflightComponent,
    AdminoperationsComponent,
    AirportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
