import {Component, Input, OnInit} from '@angular/core';
import {TheoreticalClass} from '../../domain/theoreticalclass/theoreticalclass';
import {TheoreticalClassService} from '../../domain/theoreticalclass/theoreticalclass.service';
import {TheoreticalCourseService} from '../../domain/theoreticalcourse/theoreticalcourse.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-theoretical-classes',
  templateUrl: './course-theoretical-classes.component.html',
  styleUrls: ['./course-theoretical-classes.component.css']
})
export class CourseTheoreticalClassesComponent implements OnInit {

  theoreticalClasses: TheoreticalClass[];
  courseId: number;

  constructor(private theoreticalClassService: TheoreticalClassService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      console.log('Course id: ', this.courseId);
    });
    this.theoreticalClassService.getTheoreticalClassesByCourseId(this.courseId)
      .subscribe(data => {
        this.theoreticalClasses = data;
        console.log('Theoretical classes', this.theoreticalClasses);
      });
  }
}
