import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
 doctorarr:Array<any>=[];
 //doctorarr: doctor = new doctor();
 //doctorarr: Array<doctor> = new Array<doctor>();
  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    // let arr=this.getData("DoctorData");
    // this.doctorarr=arr;
   this.doctorarr=this.doctorService.getDoctor();
    
  }
 
  // getDoctorData(): Array<doctor> {
  //   let data = localStorage.getItem("DoctorData");
  //   return (data != null && data != "") ? JSON.parse(data) : new Array<doctor>();
  // }
  deleteDoctor(index:any){
   // alert(index);
  let data= this.doctorarr.splice((index),1);
  localStorage.setItem("DoctorData",JSON.stringify(data));

  }
}
// class doctor{
//   id:number=0;
//   name:string="";
//   email:string="";
//   phone:number=0;
//   address:string="";
// }