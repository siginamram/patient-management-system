import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { department } from 'src/app/models/department-model';
import { StorageServicesService } from 'src/app/storage-services.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss']
})
export class AddEditDepartmentComponent implements OnInit {
  //Varables
  
  depart: department = new department();

  departlist: Array<department> = new Array<department>();

  isInvalid: boolean = false;

  isSavedsuccess: boolean = false;

  DeptDetailsarr: Array<department> = [];
  
  itemindex: number = 0;

  addButton: string = "Submit";

  isShown: boolean = true ;

  //input decorator
  @Input() inputDeptId: number = 0;
  @Output() closePopup:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor(private router: Router, private storageServicesService: StorageServicesService) { }
  
  ngOnInit(): void {
    
  }
 ngOnChanges(){
   //alert(this.inputDeptId);
  this.addButton = "Submit";
  this.updateById();
 }
  //Save function
  saveDepartment() {
    this.isInvalid = true;
    //Checking validation
    if (this.isSubmitValidate()) {
      
      //Checking the dupplicates
      let checkDepat = this.checkDepartment(this.depart);
      if (checkDepat == true) {
        alert('Department alreay exists...!');
      }
      else {
        //Data saving
       // let count = this.updateChk(this.depart.name, this.depart.emargency, this.depart.description);
        if (this.inputDeptId != 0) {
          if (this.addButton == "Update") {
            this.isShown=false;
            this.updateDeptData();
            this.closePopup.emit(true);
            alert("Record updated successfully.");
            this.addButton = "Submit";
          }
          
        }
        else {
          this.addButton = "Submit";
          this.storageServicesService.saveDepartmentData(this.depart);
          this.isSavedsuccess = true;
          this.isShown=true;
          this.isSubmitValidate() 
          this.resetData();
          this.timer();
        }
      }
    }

  }
  updateById() {
    if (this.inputDeptId != null && this.inputDeptId != 0)
      this.addButton = "Update";
      this.isShown=false;
    this.DeptDetailsarr = this.storageServicesService.getDepartmentData();
    this.itemindex = this.DeptDetailsarr.findIndex((dept) => dept.id == this.inputDeptId)
    this.depart.name = this.DeptDetailsarr[this.itemindex].name;
    this.depart.emargency = this.DeptDetailsarr[this.itemindex].emargency;
    this.depart.description = this.DeptDetailsarr[this.itemindex].description;

  }
  updateDeptData() {
    
    this.storageServicesService.updateDepartmentDataById(this.inputDeptId,this.depart.name,this.depart.emargency,this.depart.description)

  }
  updateChk(name: string, emargency: string, description: string): number {
    this.DeptDetailsarr = this.storageServicesService.getDepartmentData();
    let filterArra = this.DeptDetailsarr.filter((dept) => dept.name == this.depart.name && dept.emargency == this.depart.emargency && dept.description == this.depart.description)
    return filterArra.length;
  }
  //Checking Dupplicate
  checkDepartment(dept: department): boolean {
    this.DeptDetailsarr = this.storageServicesService.getDepartmentData();
    let regDept = this.DeptDetailsarr;
    let isDeptExists = false;
    for (let i = 0; i < regDept.length; i++) {
      if (regDept[i].name == dept.name || regDept[i].emargency == dept.emargency || regDept[i].description == dept.description) {
        isDeptExists = true;
      }
    }
    return isDeptExists;
  }

  //Validation
  isSubmitValidate(): boolean {
    if (this.depart.name != "" && this.depart.emargency != null && this.depart.description != "") {

      return true;
    }
    else {
      return false;
    }

  }
  //After sava data reaset
  resetData() {
    this.depart.name = "";
    this.depart.emargency = "";
    this.depart.description = "";

  }
  //Timer   // <<<---using ()=> syntax
  timer() {
    setTimeout(() => { this.isSavedsuccess = false; this.router.navigateByUrl('/department'); }, 3000);
  }
}
