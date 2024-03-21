import { CoursesService } from '../../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute
    ) {
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

  onAdd() {
    console.log('onAdd');
    this.router.navigate(['new'], {relativeTo: this.route}); //pega a rota que estamos /courses e agrega ao /new
  }

  onEdit(course: Course) {
    this.router.navigate(['edit', course._id], {relativeTo: this.route}); //pega a rota que estamos /courses e agrega ao /edit + id
  }

  onDelete() {
    console.log('onDelete');
  }
}
