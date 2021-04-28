import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {TheoreticalCourse} from "./theoreticalcourse";

@Injectable({
  providedIn: 'root'
})
export class TheoreticalCourseService {

  private readonly URL = 'http://localhost:8080/theoretical-courses';

  constructor(private httpClient: HttpClient) {
  }

  public getTheoreticalCoursesByCourseId(courseId: number): Observable<TheoreticalCourse[]> {
    return this.httpClient.get<TheoreticalCourse[]>(this.URL + "/courseId/" + courseId)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getTheoreticalCoursesByCustomerId(customerId: number): Observable<TheoreticalCourse[]> {
    return this.httpClient.get<TheoreticalCourse[]>(this.URL + "/customerId/" + customerId)
      .pipe(
        catchError(this.handleError)
      );
  }

  public enrollCustomerInTheoreticalCourse(customerId: number, theoreticalCourseId: number): Observable<any> {
    return this.httpClient.post(this.URL + "/" + customerId + "/" + theoreticalCourseId, null)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
