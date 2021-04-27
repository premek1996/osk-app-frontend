import {Component, Input, OnInit} from '@angular/core';
import {TheoreticalCourse} from "../../domain/theoreticalcourse/theoreticalcourse";

@Component({
  selector: 'app-theoretical-course',
  templateUrl: './theoretical-course.component.html',
  styleUrls: ['./theoretical-course.component.css']
})
export class TheoreticalCourseComponent implements OnInit {

  @Input() theoreticalCourse: TheoreticalCourse;

  constructor() {
  }

  ngOnInit(): void {
  }


}
