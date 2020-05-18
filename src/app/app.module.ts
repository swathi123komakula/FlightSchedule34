import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { FlightComponent } from './flight/flight.component';
import { ScheduledflightComponent } from './scheduledflight/scheduledflight.component';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { ViewflightsComponent } from './viewflights/viewflights.component';
import { UpdateflightsComponent } from './updateflights/updateflights.component';
import { ViewscheduleflightComponent } from './viewscheduleflight/viewscheduleflight.component';
import { UpdatescheduleflightComponent } from './updatescheduleflight/updatescheduleflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { SearchscheduledflightComponent } from './searchscheduledflight/searchscheduledflight.component';
import { AirportComponent } from './airport/airport.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FlightComponent,
    ScheduledflightComponent,
    AdminoperationsComponent,
    ViewflightsComponent,
    UpdateflightsComponent,
    ViewscheduleflightComponent,
    UpdatescheduleflightComponent,
    SearchflightComponent,
    SearchscheduledflightComponent,
    AirportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
