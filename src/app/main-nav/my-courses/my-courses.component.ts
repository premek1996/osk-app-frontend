import {Component} from '@angular/core';
import {TheoreticalCourse} from '../../domain/theoreticalcourse/theoreticalcourse';
import {TheoreticalCourseService} from '../../domain/theoreticalcourse/theoreticalcourse.service';
import {CustomerService} from '../../domain/customer/customer.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCourses {

  theoreticalCourses: TheoreticalCourse[];

  constructor(private theoreticalCourseService: TheoreticalCourseService, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.theoreticalCourseService.getTheoreticalCoursesByCustomerId(this.customerService.getLoggedCustomer().id)
      .subscribe(data => {
        this.theoreticalCourses = data;
        console.log("Logged user ", this.customerService.getLoggedCustomer());
        console.log("Courses", this.theoreticalCourses);
      });
  }

}
