import {Routes, RouterModule} from '@angular/router';

import {AllCourses} from './main-nav/all-courses/all-courses.component';
import {MyCourses} from './main-nav/my-courses/my-courses.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {AllTheoreticalCoursesComponent} from './main-nav/all-theoretical-courses/all-theoretical-courses.component';
import {DrivingClassesComponent} from './main-nav/driving-classes/driving-classes.component';
import {CourseTheoreticalClassesComponent} from './main-nav/course-theoretical-classes/course-theoretical-classes.component';

const routes: Routes = [
  {path: '', component: AllCourses},
  {path: 'allcourses', component: AllCourses},
  {path: 'allcourses/:courseId/alltheoreticalcourses', component: AllTheoreticalCoursesComponent},
  {path: 'mycourses', component: MyCourses},
  {path: 'mycourses/:courseId/drivingclasses', component: DrivingClassesComponent},
  {path: 'login', component: AuthorizationComponent},
  {path: 'theoreticalclasses', component: CourseTheoreticalClassesComponent},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
