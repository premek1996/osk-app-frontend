import {Component, OnInit} from '@angular/core';
import {DrivingClass} from "../../domain/drivingclass/drivingclass";
import {ActivatedRoute} from "@angular/router";
import {DrivingClassService} from "../../domain/drivingclass/drivingclass.service";
import {CustomerService} from '../../domain/customer/customer.service';
import {Instructor} from "../../domain/instructor/instructor";
import {InstructorService} from "../../domain/instructor/instructor.service";
import {DrivingClassDto} from "../../domain/drivingclass/drivingclassdto";
import {MatDialog} from "@angular/material/dialog";
import {DrivingClassEnrollmentComponent} from "./driving-class-enrollment/driving-class-enrollment.component";

@Component({
  selector: 'app-driving-classes',
  templateUrl: './driving-classes.component.html',
  styleUrls: ['./driving-classes.component.css']
})
export class DrivingClassesComponent implements OnInit {

  courseId: number;
  drivingClasses: DrivingClass[];
  instructors: Instructor[];

  selectedInstructor: Instructor;
  selectedStartTime: Date;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private drivingClassService: DrivingClassService,
              private instructorService: InstructorService,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params["courseId"];
      console.log("Course id: ", this.courseId)
    });
    this.drivingClassService.getDrivingClassesByCourseIdAndCustomerId(this.courseId, this.customerService.getLoggedCustomer().id)
      .subscribe(data => {
        this.drivingClasses = data;
        console.log("Driving classes", this.drivingClasses);
      });
    this.instructorService.getInstructors()
      .subscribe(data => {
        this.instructors = data;
        console.log("Instructors", this.instructors);
      });
    console.log("NgOnInit: " + this.drivingClasses);
  }

  onDrivingClassEnrollment() {
    let drivingClass = new DrivingClassDto(this.courseId, this.customerService.getLoggedCustomer().id, this.selectedInstructor.id, this.selectedStartTime);
    this.drivingClassService.createDrivingClass(drivingClass).subscribe(
      data => {
        console.log('CreatedDrivingClass:', data);
        this.drivingClassService.getDrivingClassesByCourseIdAndCustomerId(this.courseId, this.customerService.getLoggedCustomer().id)
          .subscribe(data => {
            this.drivingClasses = data;
            console.log("Driving classes", this.drivingClasses);
          });
        this.dialog.open(DrivingClassEnrollmentComponent);
      },
      error => {
        console.log('Something was wrong while processing driving class', error);
      });
  }

}
