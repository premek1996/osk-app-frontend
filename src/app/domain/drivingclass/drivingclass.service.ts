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
  private drivingClasses: DrivingClass[];

  constructor(private httpClient: HttpClient) {
  }

  public getDrivingClassesByCourseIdAndCustomerId(courseId: number, customerId: number): DrivingClass[] {
    this.setDrivingClasses(courseId, customerId);
    return this.drivingClasses;
  }

  private setDrivingClasses(courseId: number, customerId: number) {
    this.httpClient.get<DrivingClass[]>(this.URL + "/" + courseId + "/" + customerId)
      .pipe(
        catchError(this.handleError)
      ).subscribe(data => {
      this.drivingClasses = data;
      console.log("Driving classes", this.drivingClasses);
    });
  }

  public getDrivingClassById(drivingClassID: number): DrivingClass {
    for (let i = 0; i < this.drivingClasses.length; i++) {
      if (this.drivingClasses[i].id == drivingClassID) {
        return this.drivingClasses[i];
      }
    }
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
