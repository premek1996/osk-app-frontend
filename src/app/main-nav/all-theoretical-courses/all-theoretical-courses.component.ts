import {Component, OnInit} from '@angular/core';
import {TheoreticalCourse} from "../../domain/theoreticalcourse/theoreticalcourse";
import {TheoreticalCourseService} from "../../domain/theoreticalcourse/theoreticalcourse.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-theoretical-courses',
  templateUrl: './all-theoretical-courses.component.html',
  styleUrls: ['./all-theoretical-courses.component.css']
})
export class AllTheoreticalCoursesComponent implements OnInit {

  courseId: number;
  theoreticalCourses: TheoreticalCourse[];

  constructor(private theoreticalCourseService: TheoreticalCourseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params["courseId"];
      console.log("Course id: ", this.courseId)
    });

    this.theoreticalCourseService.getTheoreticalCoursesByCourseId(this.courseId)
      .subscribe(data => {
        this.theoreticalCourses = data;
        console.log("Theoretical courses", this.theoreticalCourses);
      });
  }

}
