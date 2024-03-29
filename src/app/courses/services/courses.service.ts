import { HttpClient } from '@angular/common/http';
import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { CourseFormComponent } from '../containers/course-form/course-form.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //private readonly API = '/assets/courses.json';
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(courses => console.log(courses))
    );
  }

  save(record: Partial<Course>) {
    if (record._id) {
      console.log('update')
      return this.update(record);
    }
    console.log('create')
    return this.create(record);
  }

  findById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  private update(record: Partial<Course>) {
    return this.httpClient.put<Course>(`${this.API}/${record._id}`, record).pipe(first());
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }

}
