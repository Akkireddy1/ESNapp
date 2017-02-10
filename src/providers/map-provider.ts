import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google;
/*
  Generated class for the MapProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MapProvider {

  map: any;
  markers: any[] = [];

  constructor(public http: Http) {
    console.log('Hello MapProvider Provider');
  }


  initMap(mapElement: any, locations: any[]) {
    //Maribor latlng setting
    let latlng = new google.maps.LatLng(46.554650, 15.645881);

    let mapOptions = {
      center: latlng,
      zoom: 13
    };
    this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
    if (locations.length) {
      console.log("locations not empy");
      this.createMarkers(locations, "");
    }
    this.showMarkers(this.markers);
    this.setMarkerIcon(this.markers, "http://megaicons.net/static/img/icons_sizes/8/178/32/catering-restaurant-icon.png");
    return this.map;
  }

  //if picUrl is empty it shows normal icon
  createMarkers(locations: any[], picUrl: String) {
    for (let location of locations) {
      let marker = new google.maps.Marker({
        position: location.position,
        title: 'Your favorite city!'
      });
      this.markers.push(marker);

      if (picUrl != "" || picUrl != undefined) {
        console.log("picUrl not empty")
        marker.setIcon(picUrl);
      }
    }



  }

  showMarkers(markers: any[]) {
    for (let marker of markers) {
      marker.setMap(this.map);
    }
  }
  hideMarkers(markers: any[]) {
    for (let marker of markers) {
      marker.setMap(null);
    }
  }
  setMarkerIcon(markers: any[], picUrl: String) {
    for (let marker of markers) {
      marker.setIcon(picUrl)
    }
  }

}
