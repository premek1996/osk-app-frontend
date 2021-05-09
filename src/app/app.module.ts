import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CustomerService} from './domain/customer/customer.service';
import {CourseService} from './domain/course/course.service';
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthorizationComponent} from './authorization/authorization.component';
import {GooglePayComponent} from './google-pay/google-pay.component';
import {GooglePayButtonModule} from '@google-pay/button-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {AllCourses} from './main-nav/all-courses/all-courses.component';
import {MyCourses} from './main-nav/my-courses/my-courses.component';
import {appRoutingModule} from './app.routing';
import {CourseComponent} from './main-nav/course/course.component';
import {TheoreticalCourseService} from './domain/theoreticalcourse/theoreticalcourse.service';
import {AllTheoreticalCoursesComponent} from './main-nav/all-theoretical-courses/all-theoretical-courses.component';
import {TheoreticalCourseComponent} from './main-nav/theoretical-course/theoretical-course.component';
import {MyCourseComponent} from './main-nav/my-course/my-course.component';
import {DrivingClassesComponent} from './main-nav/driving-classes/driving-classes.component';
import {DrivingClassComponent} from './main-nav/driving-class/driving-class.component';
import {DrivingClassService} from './domain/drivingclass/drivingclass.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import {TheoreticalClassComponent} from './main-nav/theoretical-class/theoretical-class.component';
import {CourseTheoreticalClassesComponent} from './main-nav/course-theoretical-classes/course-theoretical-classes.component';
import {TheoreticalClassService} from './domain/theoreticalclass/theoreticalclass.service';
import {GoogleCalendarComponent} from './google-calendar/google-calendar.component';
import {DialogCalendarConfirmationComponent} from './google-calendar/calendar-confirmation/dialog-calendar-confirmation.component';
import {MapComponent} from './main-nav/map-component/map.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';            // @agm/core
import {AgmDirectionModule} from 'agm-direction';   // agm-direction

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    GooglePayComponent,
    MainNavComponent,
    AllCourses,
    MyCourses,
    CourseComponent,
    AllTheoreticalCoursesComponent,
    TheoreticalCourseComponent,
    MyCourseComponent,
    DrivingClassesComponent,
    DrivingClassComponent,
    TheoreticalClassComponent,
    CourseTheoreticalClassesComponent,
    GoogleCalendarComponent,
    DialogCalendarConfirmationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyCVvgGJOQqz4rxw41FPNs0QY4EKpy_qLUI',
    }),
    AgmDirectionModule,     // agm-direction
    SocialLoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    GooglePayButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatNativeDateModule,
    appRoutingModule,
    AgmDirectionModule
  ],
  providers: [
    CustomerService,
    CourseService,
    TheoreticalCourseService,
    TheoreticalClassService,
    DrivingClassService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '477807391884-v7fl9804d2tiukg3tjea3d17715l0p7i.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
