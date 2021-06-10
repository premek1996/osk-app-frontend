import {Component, NgZone, OnInit} from '@angular/core';
import {DrivingClassService} from "../../domain/drivingclass/drivingclass.service";
import {ActivatedRoute} from "@angular/router";
import {DrivingClass} from "../../domain/drivingclass/drivingclass";
import {MatDialog} from "@angular/material/dialog";
import {RouteSaveComponent} from "./route-save/route-save.component";
import {Location} from "../../domain/drivingclass/location";

@Component({
  selector: 'app-track-route',
  templateUrl: './track-route.component.html',
  styleUrls: ['./track-route.component.css']
})
export class TrackRouteComponent implements OnInit {

  public lat = 51.10926382422896;
  public lng = 17.061962513665772;
  public zoom = 15.2;

  drivingClassId: number;
  drivingClass: DrivingClass;

  markers: Location[] = [];

  constructor(private drivingClassService: DrivingClassService,
              private route: ActivatedRoute,
              private zone: NgZone,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.drivingClassId = params["drivingClassId"];
      console.log("DrivingClassId: ", this.drivingClassId);
      this.drivingClassService.getDrivingClassById(this.drivingClassId).subscribe(data => {
        this.drivingClass = data;
        console.log("Driving class", this.drivingClass);
      });
    });
  }

  public mapReadyHandler(map: google.maps.Map): void {
    map.addListener('click', (e: google.maps.MouseEvent) => {
      this.zone.run(() => {
        this.markers.push({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
        console.log(this.markers);
      });
    });
  }

  onRouteSave() {
    this.drivingClassService.updateDrivingClass(this.drivingClassId, this.markers)
      .subscribe(data => {
        console.log("Updated driving class", data);
        this.dialog.open(RouteSaveComponent);
      });
  }

}
