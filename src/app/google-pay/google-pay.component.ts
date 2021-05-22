import {Component, Input} from '@angular/core';
import {TheoreticalCourse} from "../domain/theoreticalcourse/theoreticalcourse";
import {TheoreticalCourseService} from "../domain/theoreticalcourse/theoreticalcourse.service";
import {MatDialog} from '@angular/material/dialog'
import {DialogPaymentConfirmation} from './payment-confirmation/dialog-payment-confirmation.component';
import {CustomerService} from '../domain/customer/customer.service';

@Component({
  selector: 'app-google-pay',
  templateUrl: './google-pay.component.html',
  styleUrls: ['./google-pay.component.css']
})
export class GooglePayComponent {
  @Input() theoreticalCourse: TheoreticalCourse;
  customerId: number;

  constructor(private dialog: MatDialog,
              private theoreticalCourseService: TheoreticalCourseService,
              private customerService: CustomerService) {
    this.customerId = customerService.getLoggedCustomer().id;
  }

  private paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "OSK"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "0.00",
      currencyCode: "PLN",
      countryCode: "PL"
    }
  };

  getPaymentRequest() {
    this.paymentRequest.transactionInfo.totalPrice = "" + this.theoreticalCourse.course.price + "";
    return this.paymentRequest;
  }

  onLoadPaymentData(event) {
    this.theoreticalCourseService.enrollCustomerInTheoreticalCourse(this.customerId, this.theoreticalCourse.id).subscribe(data => {
      console.log("Theoretical course participant", this.customerId);
      console.log("Theoretical course participation", data);
    });
    this.dialog.open(DialogPaymentConfirmation);
  }

}
