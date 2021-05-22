import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {TheoreticalClass} from './theoreticalclass';

@Injectable({
  providedIn: 'root'
})
export class TheoreticalClassService {

  private readonly URL = 'http://localhost:8080/theoretical-classes';

  constructor(private httpClient: HttpClient) {
  }

  public getTheoreticalClasses(): Observable<TheoreticalClass[]> {
    return this.httpClient.get<TheoreticalClass[]>(this.URL)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getTheoreticalClassesByCourseId(courseId: number): Observable<TheoreticalClass[]> {
    return this.httpClient.get<TheoreticalClass[]>(this.URL + '/courseId/' + courseId)
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
