import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { department } from 'src/app/models/department-model';
import { DoctorService } from 'src/app/services/doctor.service';
import { StorageServicesService } from 'src/app/storage-services.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
//Variable declartion
  dept: Array<department> = new Array<department>();
  itemindex: any;
  dctDetailsarr: Array<any> = [];
  
  constructor(private formBuilder: FormBuilder,
              private router: ActivatedRoute,
              private doctorServices:DoctorService,
              private storageServicesService:StorageServicesService) { }
//Form group
  editdoctorInfo = this.formBuilder.group({
    //id: [0],
    deptId: ["", [Validators.required]],
    name: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
    email: ["", [Validators.required, Validators.email]],
    password:["", [Validators.required]],
    phone: [0, [Validators.required, Validators.maxLength(10)]],
    address: [""],
    aboutus: [""]

  });

  ngOnInit(): void {
       this.dept = this.storageServicesService.getDepartmentData();
    console.warn(this.router.snapshot.params['id']);

    //let arra = new Array();

    //let data=this.editdoctorInfo.value;

    this.dctDetailsarr = this.doctorServices.getDoctor();

    this.itemindex=this.router.snapshot.params['id'];

    let index = this.dctDetailsarr.find(dct => dct.id == this.itemindex );

    this.editdoctorInfo = this.formBuilder.group({
      deptId:[index.deptId],
      name: [index.name],
      email: [index.email],
      password:[index.password],
      phone: [index.phone],
      address: [index.address],
      aboutus: [index.aboutus]
  
    });
    
  }
//functions 
//Update Doctors data
updateDoctorsData()
{
  alert("RK");
}


  getData(key: string): any {
    return localStorage.getItem(key);
  }

}
