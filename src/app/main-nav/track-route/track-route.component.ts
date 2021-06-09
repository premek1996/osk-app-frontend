import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-track-route',
  templateUrl: './track-route.component.html',
  styleUrls: ['./track-route.component.css']
})
export class TrackRouteComponent implements OnInit {

  public lat = 51.10926382422896;
  public lng = 17.061962513665772;

  markers: marker[] = [];

  constructor(private zone: NgZone) {
  }

  ngOnInit(): void {
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

}

interface marker {
  lat: number;
  lng: number;
}
