import { Injectable } from '@angular/core';


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
  icons: any[]= [{type:"restaurant",url:"http://megaicons.net/static/img/icons_sizes/8/178/32/catering-restaurant-icon.png"}];

  constructor() {
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
      console.log("locations not empty");
      this.createMarkers(locations);
    }
    this.setMarkerIcon(this.markers,"http://megaicons.net/static/img/icons_sizes/8/178/32/catering-restaurant-icon.png");
    //this.showMarkers("restaurant");
    //this.showAllMarkers();
    return this.map;
  }

  //if picUrl is empty it shows normal icon
  createMarkers(locations: any[]) {
    for (let location of locations) {
      let marker = new google.maps.Marker({
        position: location.position,
        title: 'Your favorite city!',
        type:location.type //TODO get from location object
      });
       if (location.type != undefined) {
        this.setMarkerIcon(marker, location.type)
      }
      this.markers.push(marker);

     
    }
  }

  showAllMarkers() {
    for (let marker of this.markers) {
      marker.setMap(this.map);
    }
  }
  showMarkers(type:String){
    for (let marker of this.markers){
      if(type==marker.type){
        marker.setMap(this.map);
      }
    }
  }

  hideMarkers(markers: any[]) {
    for (let marker of markers) {
      marker.setMap(null);
    }
  }
  setMarkerIcon(marker:any, markerType:any) {
      for (let icon of this.icons){
        if (markerType==icon.type){
          marker.setIcon(icon.url);
        }
      }
     
    
  }
}
