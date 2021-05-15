import {Component, OnInit} from '@angular/core';
import {DrivingClass} from "../../domain/drivingclass/drivingclass";
import {ActivatedRoute} from "@angular/router";
import {DrivingClassService} from "../../domain/drivingclass/drivingclass.service";

@Component({
  selector: 'app-driving-classes',
  templateUrl: './driving-classes.component.html',
  styleUrls: ['./driving-classes.component.css']
})
export class DrivingClassesComponent implements OnInit {

  courseId: number;
  drivingClasses: DrivingClass[];

  constructor(private drivingClassService: DrivingClassService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params["courseId"];
      console.log("Course id: ", this.courseId)
    });
    this.drivingClasses = this.drivingClassService.getDrivingClassesByCourseIdAndCustomerId(this.courseId, 1);
    console.log("NgOnInit: " + this.drivingClasses);
  }

}
