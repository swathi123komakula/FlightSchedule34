import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService, Scheduledflight } from '../scheduleservice.service';
import { Router } from '@angular/router';
import { Airport } from '../flightservice.service';


@Component({
  selector: 'app-scheduledflight',
  templateUrl: './scheduledflight.component.html',
  styleUrls: ['./scheduledflight.component.css']
})
export class ScheduledflightComponent implements OnInit {
  message:string;
  airport:Airport[]
  flight:number;
  sourceairport:string;
  destinationairport:string;
  constructor(private scheduleservice: ScheduleserviceService,private router: Router) { }

  ngOnInit():any{
    
    }
  getairportname(response){
    this.airport=response;
  }
  onSubmit(addschedule:Scheduledflight):any{
     this.scheduleservice.addScheduledflight(addschedule,this.flight,this.sourceairport,this.destinationairport).subscribe(data => {
      this.message=data});
     
  }

}
