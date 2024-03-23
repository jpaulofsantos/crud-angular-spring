import { CoursesService } from '../../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses$: Observable<Course[]> | null = null;

  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) {
    this.refresh();
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

  onDelete(course: Course) {

      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: 'Delete course?',
      });

      dialogRef.afterClosed().subscribe((result: Boolean) => {
        if (result) {
          this.courseService.delete(course._id).subscribe(
            () => {
              this.snackBar.open('Curso removido com sucesso', 'X', {duration: 1000, verticalPosition: 'top', horizontalPosition: 'center'});
              this.refresh();
            },
            error => this.onError('Erro ao tentar remover curso')
          );
        }

      });
  }

  refresh() {
    this.courses$ = this.courseService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar lista de cursos')
          return of([])
        })
      );
  }
}
