import { Component, OnInit } from '@angular/core';
import { department } from 'src/app/models/department-model';
import { StorageServicesService } from 'src/app/storage-services.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  dept: Array<department> = new Array<department>();

  constructor(private storageServicesService: StorageServicesService,
    private router: Router, private formBuilder: FormBuilder) { }

  doctorInfo = this.formBuilder.group({
    id: [0],
    deptId: ["-1", [Validators.required]],
    name: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]],
    phone: [0, [Validators.required, Validators.maxLength(10)]],
    address: [""],
    aboutus: [""]

  });

  ngOnInit(): void {
    this.dept = this.storageServicesService.getDepartmentData();
  }
  saveData() {
    if(this.doctorInfo.valid==true)
    {

    let arr = new Array();
    let data = this.getData("DoctorData");
    if (data != "" && data != undefined && data != null) {
      arr = JSON.parse(data);
    }
    let dId = this.doctorInfo.value
    dId.id = arr.length + 1;
    arr.push(this.doctorInfo.value);
    localStorage.setItem("DoctorData", JSON.stringify(arr));
    alert('Data saved successfuly...!');
    this.router.navigateByUrl('/Doctor');
    this.resetData();
  }
  else{
    alert("Please enter valid data..!");
  }
  }

  getData(key: string): any {
    return localStorage.getItem(key);
  }
  resetData() {
    let data = this.doctorInfo.value
    data.name = "";
    data.deptId = 0;
    data.email = "";
    data.password = "";
    data.phone = "";
    data.address = "";
    data.aboutus = "";
  }
}
