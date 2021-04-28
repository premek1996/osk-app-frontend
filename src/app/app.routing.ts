import {Routes, RouterModule} from '@angular/router';

import {AllCourses} from './main-nav/all-courses/all-courses.component';
import {MyCourses} from './main-nav/my-courses/my-courses.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {AllTheoreticalCoursesComponent} from "./main-nav/all-theoretical-courses/all-theoretical-courses.component";

const routes: Routes = [
  {path: '', component: AllCourses},
  {path: 'allcourses', component: AllCourses},
  {path: 'allcourses/:courseId/alltheoreticalcourses', component: AllTheoreticalCoursesComponent},
  {path: 'mycourses', component: MyCourses},
  {path: 'login', component: AuthorizationComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
