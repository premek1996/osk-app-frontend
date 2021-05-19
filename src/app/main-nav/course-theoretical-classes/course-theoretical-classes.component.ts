import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {TheoreticalClass} from '../../domain/theoreticalclass/theoreticalclass';
import {TheoreticalClassService} from '../../domain/theoreticalclass/theoreticalclass.service';
import {TheoreticalCourseService} from '../../domain/theoreticalcourse/theoreticalcourse.service';
import {ActivatedRoute} from '@angular/router';
import {DialogCalendarConfirmationComponent} from '../../google-calendar/calendar-confirmation/dialog-calendar-confirmation.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-course-theoretical-classes',
  templateUrl: './course-theoretical-classes.component.html',
  styleUrls: ['./course-theoretical-classes.component.css']
})
export class CourseTheoreticalClassesComponent implements OnInit {

  theoreticalClasses: TheoreticalClass[];
  courseId: number;
  courseName: string;
  // url: string;
  url = 'https://calendar.google.com/calendar/u/3?cid=Y19paG41cHNjNm9sYXU2bjZnNm1tM2NsdGE1OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t';
  urlWidget = 'https://calendar.google.com/calendar/embed?src=c_ihn5psc6olau6n6g6mm3clta58%40group.calendar.google.com&ctz=Europe%2FWarsaw';
  constructor(private theoreticalClassService: TheoreticalClassService, private route: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      console.log('Course id: ', this.courseId);
    });
    this.route.params.subscribe(params => {
      this.courseName = params.courseName;
      console.log('Course name: ', this.courseName);
    });
    this.theoreticalClassService.getTheoreticalClassesByCourseId(this.courseId)
      .subscribe(data => {
        this.theoreticalClasses = data;
        console.log('Theoretical classes', this.theoreticalClasses);
      });
  }
  public generateLink(): void{
    // tslint:disable-next-line:max-line-length
    const sDate = this.theoreticalClasses[0].startTime.getFullYear() + this.theoreticalClasses[0].startTime.getMonth() + this.theoreticalClasses[0].startTime.getDay() + 'T' + this.theoreticalClasses[0].startTime.getHours() + this.theoreticalClasses[0].startTime.getMinutes() + '00UTC';
    // tslint:disable-next-line:max-line-length
    const eDate = this.theoreticalClasses[0].endTime.getFullYear() + this.theoreticalClasses[0].endTime.getMonth() + this.theoreticalClasses[0].endTime.getDay() + 'T' + this.theoreticalClasses[0].endTime.getHours() + this.theoreticalClasses[0].endTime.getMinutes() + '00UTC';
    const numberOfClasses = this.theoreticalClasses.length;
    // tslint:disable-next-line:max-line-length
    this.url = 'https://calendar.google.com/calendar/u/0/r/eventedit?text=kurs+prawo+jazdy+kat.+B' + '&dates=' + sDate + '/' + eDate + '&recur=RRULE:FREQ%3DWEEKLY;COUNT%3D' + numberOfClasses + '';
    window.open(this.url);
  }

}
