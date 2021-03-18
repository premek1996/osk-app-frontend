import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { CustomerService } from './domain/customer/customer.service';
import { CourseService } from './domain/course/course.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CustomerService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
