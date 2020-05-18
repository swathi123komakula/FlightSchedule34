import { Component, OnInit } from '@angular/core';
import { MyserviceService, Userdata } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  buttonText='username';
  constructor(private ser:MyserviceService,private router:Router) { }

  msg:string="Enter Correct UserName and Password";
  ngOnInit(): void {
  }
  onSubmit(u:Userdata){
    this.ser.login(u).subscribe(
      users=>{
        if(users=="admin")
            this.router.navigate(['app-adminoperations']);
        else (users=="invalid")
          alert("Enter correct credentials");
      }
    );
  }
}
