import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Customer} from "./customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly URL = 'http://localhost:8080/customers';

  constructor(private httpClient: HttpClient) {
  }

  public getAllCustomers(): Observable<Array<Customer>> {
    return this.httpClient.get<Array<Customer>>(this.URL);
  }

}
