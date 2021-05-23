import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogCalendarConfirmationComponent} from './calendar-confirmation/dialog-calendar-confirmation.component';

@Component({
  selector: 'app-google-calendar',
  templateUrl: './google-calendar.component.html',
  styleUrls: ['./google-calendar.component.css']
})
export class GoogleCalendarComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dialog.open(DialogCalendarConfirmationComponent);
  }

}
