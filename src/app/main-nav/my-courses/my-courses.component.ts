import {Component} from '@angular/core';
import {TheoreticalCourse} from "../../domain/theoreticalcourse/theoreticalcourse";
import {TheoreticalCourseService} from "../../domain/theoreticalcourse/theoreticalcourse.service";

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCourses {

  theoreticalCourses: TheoreticalCourse[];

  constructor(private theoreticalCourseService: TheoreticalCourseService) {
  }

  ngOnInit(): void {
    this.theoreticalCourseService.getTheoreticalCoursesByCustomerId(1)
      .subscribe(data => {
        this.theoreticalCourses = data;
        console.log("Courses", this.theoreticalCourses);
      });
  }

}
