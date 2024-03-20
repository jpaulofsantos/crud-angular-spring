import { Component, Input } from '@angular/core';
import { Course } from '../model/course';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent {

  @Input() courses: Course[] = [];
  readonly displayedColumns = ['_id', 'name', 'category', 'actions']

  constructor(public router: Router,
    private route: ActivatedRoute) {
    }

    onAdd() {
      console.log('onAdd');
      this.router.navigate(['new'], {relativeTo: this.route}); //pega a rota que estamos /courses e agrega ao /new
    }

    onEdit() {
      console.log('onEdit');
    }

    onDelete() {
      console.log('onDelete');
    }

}
