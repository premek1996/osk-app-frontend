import { Routes, RouterModule } from '@angular/router';

import { AllCourses } from './main-nav/all-courses/all-courses.component';
import { MyCourses } from './main-nav/my-courses/my-courses.component';

const routes: Routes = [
    { path: '', component: AllCourses },
    { path: 'allcourses', component: AllCourses },
    { path: 'mycourses', component: MyCourses },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);