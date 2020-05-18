import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor(private ser:HttpClient) { }
  
  public addUser(adduser: Userdata) {
    console.log("ins service add");
    console.log(adduser);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.post("http://localhost:1478/admin/addUser", adduser,  { headers, responseType: 'text'});
  }

  login(u:Userdata){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.put("http://localhost:1478/admin/loginUser", u,  { headers, responseType: 'text'});
  }
}
export class Userdata{
  userid:number;
  username:string;
  usertype:string;
  userpassword:string;
  userphone:number;
  useremail:string;
}