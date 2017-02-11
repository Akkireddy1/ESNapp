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


  initMap(mapElement: any, firebaseLocations: any) {
    //Maribor latlng setting
    let latlng = new google.maps.LatLng(46.554650, 15.645881);

    let mapOptions = {
      center: latlng,
      zoom: 13
    };
    this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);

    this.setLocations(firebaseLocations);
    //console.log(locations[0].title);
    //this.setMarkerIcon(this.markers,"http://megaicons.net/static/img/icons_sizes/8/178/32/catering-restaurant-icon.png");
    
    return this.map;
  }

   //FirebaseListObservable<any> 
  setLocations(firebaseLocations: any){
    firebaseLocations.subscribe(snapshot=>{
      snapshot.forEach(location=>{
        console.log(location.title);
        this.createMarker(location);
      });
    });
  }

  //if picUrl is empty it shows normal icon
  createMarker(location: any) {
    console.log(location.latitude);
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.latitude, location.longitude),
        title: location.title,
        type:location.type,
        description:location.description,
        address:location.address,
        image:location.src
      });
       if (location.type != undefined) {
        this.setMarkerIcon(marker, location.type)
      }
      this.markers.push(marker);
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

  hideMarkers(type:String) {
    for (let marker of this.markers){
      if(type==marker.type){
        marker.setMap(null);
      }
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
