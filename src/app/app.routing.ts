import {Routes, RouterModule} from '@angular/router';

import {AllCourses} from './main-nav/all-courses/all-courses.component';
import {MyCourses} from './main-nav/my-courses/my-courses.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {AllTheoreticalCoursesComponent} from './main-nav/all-theoretical-courses/all-theoretical-courses.component';
import {DrivingClassesComponent} from './main-nav/driving-classes/driving-classes.component';
import {CourseTheoreticalClassesComponent} from './main-nav/course-theoretical-classes/course-theoretical-classes.component';
import {GoogleCalendarComponent} from './google-calendar/google-calendar.component';
import {MapComponent} from "./main-nav/map-component/map.component";
import {PersonalDataComponent} from "./main-nav/personal-data/personal-data.component";
import {TrackRouteComponent} from "./main-nav/track-route/track-route.component";

const routes: Routes = [
  {path: '', component: AllCourses},
  {path: 'allcourses', component: AllCourses},
  {path: 'personaldata', component: PersonalDataComponent},
  {path: 'allcourses/:courseId/alltheoreticalcourses', component: AllTheoreticalCoursesComponent},
  {path: 'mycourses', component: MyCourses},
  {path: 'mycourses/:courseId/drivingclasses', component: DrivingClassesComponent},
  {path: 'mycourses/:courseId/drivingclasses/:drivingClassId/route', component: MapComponent},
  {path: 'mycourses/:courseId/drivingclasses/:drivingClassId/track-route', component: TrackRouteComponent},
  {path: 'login', component: AuthorizationComponent},
  {path: 'theoreticalclasses/:courseId', component: CourseTheoreticalClassesComponent},
  {path: 'theoreticalclasses/:courseId/calendar', component: GoogleCalendarComponent},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
