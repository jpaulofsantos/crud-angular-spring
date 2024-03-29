import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses/courses.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class CoursesModule { }
