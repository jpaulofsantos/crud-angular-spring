import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../model/course';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['_id', 'name', 'category']

  constructor(private courseService: CoursesService,
    public dialog: MatDialog ) {
    this.courses$ = this.courseService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar lista de cursos')
          return of([])
        })
      );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }
}
