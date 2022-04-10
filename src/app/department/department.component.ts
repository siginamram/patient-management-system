import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { department } from '../models/department-model';
import { StorageServicesService } from '../storage-services.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
//Variables
  deptDetailsarr: Array<department> = [];

  deptsId:number=0;

  isShowPopUp: boolean = false;


  constructor(private router: Router, private storageServicesService: StorageServicesService) { }

  ngOnInit(): void {

    this.deptDetailsarr = this.storageServicesService.getDepartmentData();

  }
//Functions
  addDepartment() {

    this.router.navigateByUrl('/addDepartment');

  }

  editDepartment(deptId: number) {
    this.deptsId=deptId;
    this.isShowPopUp = true;
  }

  deleteDepartment(index: any) {

    this.deptDetailsarr.splice((index), 1);
 
    //localStorage.setItem('DepartmentDetails',JSON.stringify(this.deptDetailsarr));
    this.storageServicesService.deleteDepartmentDataById(this.deptDetailsarr);

  }
  closePopup() {
    this.isShowPopUp = false;
    window.location.reload();
  }
}
