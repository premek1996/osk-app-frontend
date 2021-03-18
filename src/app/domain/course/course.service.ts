import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from './course';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  readonly URL = 'http://localhost:8080/courses';

  constructor(private httpClient: HttpClient) {
  }

  public getAllCourses(): Observable<Array<Course>> {
    return this.httpClient.get<Array<Course>>(this.URL);
  }

}
