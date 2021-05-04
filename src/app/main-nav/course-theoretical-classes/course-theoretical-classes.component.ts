import { Component, OnInit } from '@angular/core';
import {TheoreticalClass} from '../../domain/theoreticalclass/theoreticalclass';
import {TheoreticalClassService} from '../../domain/theoreticalclass/theoreticalclass.service';

@Component({
  selector: 'app-course-theoretical-classes',
  templateUrl: './course-theoretical-classes.component.html',
  styleUrls: ['./course-theoretical-classes.component.css']
})
export class CourseTheoreticalClassesComponent implements OnInit {

  theoreticalClasses: TheoreticalClass[];

  constructor(private theoreticalClassService: TheoreticalClassService) {
  }

  ngOnInit(): void {
    this.theoreticalClassService.getTheoreticalClasses()
      .subscribe(data => {
        this.theoreticalClasses = data;
        console.log('Theoretical classes', this.theoreticalClasses);
      });
  }
}
