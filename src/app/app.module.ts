import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { CustomerService } from './domain/customer/customer.service';
import { CourseService } from './domain/course/course.service';
import { GooglePayComponent } from './google-pay/google-pay.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';

@NgModule({
  declarations: [
    AppComponent,
    GooglePayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GooglePayButtonModule
  ],
  providers: [
    CustomerService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
