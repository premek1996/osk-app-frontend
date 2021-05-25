import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {CustomerService} from "../../domain/customer/customer.service";
import {MatDialog} from "@angular/material/dialog";
import {PersonalDataConfirmationComponent} from "./personal-data-confirmation/personal-data-confirmation.component";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  firstName: string;
  secondName: string;
  phoneNumber: string;
  mail: string;

  emailFormControl = new FormControl('', [
    Validators.email,
  ]);

  telFormControl = new FormControl('', [
    Validators.pattern("[0-9]{9}"),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private customerService: CustomerService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    let customer = this.customerService.getLoggedCustomer();
    this.firstName = customer.firstName;
    this.secondName = customer.secondName;
    this.phoneNumber = customer.phoneNumber;
    this.mail = customer.mail;
  }

  onSavingPersonalData() {
    let customerId = this.customerService.getLoggedCustomer().id;
    this.customerService.updateCustomer(
      {
        id: customerId,
        mail: this.mail,
        firstName: this.firstName,
        secondName: this.secondName,
        phoneNumber: this.phoneNumber
      }).subscribe(data => {
      this.customerService.setLoggedCustomer(data);
      this.dialog.open(PersonalDataConfirmationComponent);
    });

  }

}
