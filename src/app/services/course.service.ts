import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';


@Injectable({
  providedIn: 'root',
})

export class CourseService {

  private url_backend = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url_backend + 'courses');
  }

  addCourse(formData: FormData): Observable<Course> {
    return this.http.post<Course>(`${this.url_backend}courses`, formData);
  }

  // updateCourse(courseId: number, updatedCourse: Course): Observable<Course> {
  //   return this.http.put<Course>(`${this.url_backend}courses/${courseId}`, updatedCourse);
  // }

  // deleteCourse(courseId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.url_backend}courses/${courseId}`);
  // }
}
