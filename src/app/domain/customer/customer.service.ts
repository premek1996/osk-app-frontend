import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Customer} from './customer';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private loggedCustomer: Customer;
  private readonly URL = 'http://localhost:8080/customers';
  private readonly HTTP_STATUS_NOT_FOUND = 404;

  constructor(private httpClient: HttpClient) {
  }

  public getCustomers(): Observable<Customer[]> {
    console.log('Getting all customers');
    return this.httpClient.get<Customer[]>(this.URL)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getCustomer(mail: string): Observable<Customer> {
    console.log('Getting customer with mail ' + mail);
    return this.httpClient.get<Customer>(this.URL + '/' + mail)
      .pipe(
        catchError(this.handleError)
      );
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    console.log('Creating customer');
    return this.httpClient.post<Customer>(this.URL, JSON.stringify(customer), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  public createCustomerIfNotExists(customer: Customer): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URL + '/' + customer.mail)
      .pipe(
        catchError(error => error.status === this.HTTP_STATUS_NOT_FOUND ? this.createCustomer(customer) : this.handleError)
      );
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    console.log('Updating customer');
    return this.httpClient.put<Customer>(this.URL + '/' + customer.id, JSON.stringify(customer), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteCustomer(id: string): Observable<Customer> {
    console.log('Deleting customer');
    return this.httpClient.delete<Customer>(this.URL + '/' + id, httpOptions)
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

  public setLoggedCustomer(value: Customer): void {
    this.loggedCustomer = value;
  }

  public getLoggedCustomer(): Customer {
    return this.loggedCustomer;
  }

}
