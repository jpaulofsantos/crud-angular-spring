import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Frontend' },
    {_id: '2', name: 'Java', category: 'Backend' },
    {_id: '3', name: 'Android', category: 'Frontend' }
  ];
  displayedColumns = ['name', 'category']

  constructor() {

  }

}
