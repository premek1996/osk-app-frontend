import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-google-pay',
  templateUrl: './google-pay.component.html',
  styleUrls: ['./google-pay.component.css']
})
export class GooglePayComponent {

    @Input() totalPrice : string;

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

      getPaymentRequest(totalPrice: string){
        this.paymentRequest.transactionInfo.totalPrice = "" + totalPrice + "";
          return this.paymentRequest;
      }

      onLoadPaymentData(event) {
        //TODO:  action after payment
        console.log("load payment data", event.detail);
      }

}
