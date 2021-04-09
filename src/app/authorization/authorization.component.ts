import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {CustomerService} from '../domain/customer/customer.service';
import {Customer} from '../domain/customer/customer';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  signInForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;

  constructor(private fb: FormBuilder, private authService: SocialAuthService, private customerService: CustomerService) {
    this.loggedIn = false;
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);

      if (this.user != null) {
        this.addCustomerIfNotExists({mail: this.user.email});
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  addCustomerIfNotExists(customer: Customer): void {
    this.customerService.createCustomerIfNotExists(customer)
      .subscribe(
        data => {
          console.log('Customer:', data);
        },
        error => {
          console.log('Something was wrong while processing customer', error);
        });
  }
}
