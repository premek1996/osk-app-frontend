import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DrivingClassService} from "../../domain/drivingclass/drivingclass.service";
import {DrivingClass} from "../../domain/drivingclass/drivingclass";
import {Location} from "../../domain/drivingclass/location";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public lat = 51.10926382422896;
  public lng = 17.061962513665772;

  public origin: Location;
  public destination: Location;
  public waypoints;

  drivingClassId: number;
  drivingClass: DrivingClass;
  locations: Location[];

  constructor(private drivingClassService: DrivingClassService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.drivingClassId = params["drivingClassId"];
      console.log("DrivingClassId: ", this.drivingClassId);
      this.drivingClassService.getDrivingClassById(this.drivingClassId).subscribe(data => {
        this.drivingClass = data;
        console.log("Driving classes", this.drivingClass);
        this.getDirection();
      });
    });
  }

  getDirection() {
    this.locations = this.drivingClass.locations;
    this.origin = this.locations[0];
    this.destination = this.locations[this.locations.length - 1];

    this.waypoints = [];
    for (let i = 1; i < this.locations.length - 1; i++) {
      this.waypoints.push({location: {lat: this.locations[i].lat, lng: this.locations[i].lng}});
    }
  }

}
