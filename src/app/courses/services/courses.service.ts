import { HttpClient } from '@angular/common/http';
import { Course } from './../model/course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      {_id: '1', name: 'Angular', category: 'Frontend' },
      {_id: '2', name: 'Java', category: 'Backend' },
      {_id: '3', name: 'Android', category: 'Frontend' }
    ]
  }
}
