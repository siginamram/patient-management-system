import { Injectable } from '@angular/core';
import { department } from './models/department-model';

@Injectable({
  providedIn: 'root'
})

export class StorageServicesService {

  constructor() { }

  //Department data save 
  saveDepartmentData(userdata: department) {
    let data = new Array<department>();

    for (let item of this.getDepartmentData()) {
      data.push(item);
    }
    userdata.id = data.length + 1;
    data.push(userdata);

    localStorage.setItem("DepartmentDetails", JSON.stringify(data));
  }

  //Department data get 
  getDepartmentData(): Array<department> {
    let data = localStorage.getItem("DepartmentDetails");
    return (data != null && data != "") ? JSON.parse(data) : new Array<department>();
  }

  //updateDept By ID
  updateDepartmentDataById(id: number, name: string, emargency: string, description: string) {
    let deptData = this.getDepartmentData();
    for (let item of deptData) {
      if (item.id == id) {
        item.name = name;
        item.emargency = emargency;
        item.description = description;
      }
    }
    this.updateSavedData(JSON.stringify(deptData));
  }

  //Dept Update
  updateSavedData(data: string) {
    localStorage.setItem("DepartmentDetails", data);
  }

  //Delete Dept By ID
  deleteDepartmentDataById(data: any) {
    localStorage.setItem('DepartmentDetails',JSON.stringify(data));
       
    }
    
  
}
