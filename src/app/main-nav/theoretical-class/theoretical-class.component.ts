import {Component, Input, OnInit} from '@angular/core';
import {TheoreticalClass} from '../../domain/theoreticalclass/theoreticalclass';
import {TheoreticalCourseService} from '../../domain/theoreticalcourse/theoreticalcourse.service';
import {TheoreticalClassService} from '../../domain/theoreticalclass/theoreticalclass.service';
import {TheoreticalCourse} from '../../domain/theoreticalcourse/theoreticalcourse';

@Component({
  selector: 'app-theoretical-class',
  templateUrl: './theoretical-class.component.html',
  styleUrls: ['./theoretical-class.component.css']
})
export class TheoreticalClassComponent implements OnInit {

  @Input() theoreticalClass: TheoreticalClass;


  constructor() {
  }

  ngOnInit(): void {
  }

}
