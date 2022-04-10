import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenusLeftComponent } from './menus-left/menus-left.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TopBanerComponent } from './top-baner/top-baner.component';
import { DepartmentComponent } from './department/department.component';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import {StorageServicesService} from './storage-services.service';
import { DoctorComponent } from './doctor/doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { BasicInformationComponent } from './doctor/basic-information/basic-information.component';
import { EditDoctorComponent } from './doctor/edit-doctor/edit-doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    MenusLeftComponent,
    MainContentComponent,
    TopBanerComponent,
    DepartmentComponent,
    AddEditDepartmentComponent,
    DoctorComponent,
    AddDoctorComponent,
    BasicInformationComponent,
    EditDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [StorageServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
