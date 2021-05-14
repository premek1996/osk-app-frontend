import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public lat = 51.10926382422896;
  public lng = 17.061962513665772;

  public origin: any;
  public destination: any;
  public waypoints: any;

  drivingClassId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.drivingClassId = params["drivingClassId"];
      console.log("DrivingClassId: ", this.drivingClassId)
    });
    this.getDirection();
  }

  getDirection() {
    this.origin = {lat: 51.10926382422896, lng: 17.061962513665772};
    this.destination = {lat: 51.12560832839537, lng: 17.054337019704196};

    this.waypoints = [
      {location: {lat: 51.11438225604232, lng: 17.06054905621125}},
      {location: {lat: 51.11628341568578, lng: 17.055363031720777}}
    ];

    // Location within a string
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }

}
