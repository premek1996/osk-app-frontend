import {Component, Input, OnInit} from '@angular/core';
import {DrivingClass} from "../../domain/drivingclass/drivingclass";

@Component({
  selector: 'app-driving-class',
  templateUrl: './driving-class.component.html',
  styleUrls: ['./driving-class.component.css']
})
export class DrivingClassComponent implements OnInit {

  @Input() drivingClass: DrivingClass;

  constructor() {
  }

  ngOnInit(): void {
  }

}
