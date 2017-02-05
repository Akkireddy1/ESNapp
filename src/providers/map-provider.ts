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

  map:any;

  constructor(public http: Http) {
    console.log('Hello MapProvider Provider');
  }


  initMap(mapElement: any){
    let latlng = new google.maps.LatLng(46.554650, 15.645881);

    let mapOptions = {
        center:latlng,
        zoom:13
    };
    this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
    return this.map
  }
}
