import {Component} from '@angular/core';
import {CourseService} from "../../domain/course/course.service";
import {Course} from "../../domain/course/course";

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCourses {

  courses: Course[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses()
      .subscribe(data => {
        this.courses = data;
        console.log("Courses", this.courses);
      });
  }

}
