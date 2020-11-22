import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page.component';
import { CoursePageRoutingModule } from './course-page-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CoursePageRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CoursePageComponent
  ]
})
export class CoursePageModule { }
