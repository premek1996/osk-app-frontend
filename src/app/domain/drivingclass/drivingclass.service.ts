import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {DrivingClass} from "./drivingclass";

@Injectable({
  providedIn: 'root'
})
export class DrivingClassService {

  private readonly URL = 'http://localhost:8080/driving-classes';

  constructor(private httpClient: HttpClient) {
  }

  public getDrivingClassesByCourseIdAndCustomerId(courseId: number, customerId: number): Observable<DrivingClass[]> {
    return this.httpClient.get<DrivingClass[]>(this.URL + "/" + courseId + "/" + customerId)
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
