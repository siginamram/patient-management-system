import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor() { }
  
  getDoctor():Array<any>{
    let data=localStorage.getItem("DoctorData")
    return (data!="" && data!=null)?JSON.parse(data): new Array<any>();

  }
}
