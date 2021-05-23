import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Instructor} from "./instructor";

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private readonly URL = 'http://localhost:8080/instructors';

  constructor(private httpClient: HttpClient) {
  }

  public getInstructors(): Observable<Instructor[]> {
    console.log('Getting all instructors');
    return this.httpClient.get<Instructor[]>(this.URL)
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
