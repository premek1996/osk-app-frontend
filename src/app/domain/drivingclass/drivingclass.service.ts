import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {DrivingClass} from "./drivingclass";
import {Customer} from "../customer/customer";
import {DrivingClassDto} from "./drivingclassdto";

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    })
};

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

  public createDrivingClass(drivingClass: DrivingClassDto): Observable<Customer> {
    console.log('Creating drivingClass');
    return this.httpClient.post<DrivingClassDto>(this.URL, JSON.stringify(drivingClass), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getDrivingClassById(drivingClassId: number): Observable<DrivingClass> {
    return this.httpClient.get<DrivingClass>(this.URL + '/' + drivingClassId)
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
