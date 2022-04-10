import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentComponent} from './department/department.component';
import {AddEditDepartmentComponent} from './department/add-edit-department/add-edit-department.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';

const routes: Routes = [{path:'department',component:DepartmentComponent},
                        {path:'addDepartment',component:AddEditDepartmentComponent},
                        {path:'Doctor',component:DoctorComponent},
                        {path:'addDoctor',component:AddDoctorComponent},
                        {path:'updateDoctor/:id',component:EditDoctorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
