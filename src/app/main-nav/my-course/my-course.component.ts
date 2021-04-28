import {Component, Input, OnInit} from '@angular/core';
import {TheoreticalCourse} from "../../domain/theoreticalcourse/theoreticalcourse";

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.css']
})
export class MyCourseComponent implements OnInit {

  @Input() theoreticalCourse: TheoreticalCourse;

  constructor() {
  }

  ngOnInit(): void {
  }

}
