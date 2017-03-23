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

  markers: any[] = [];
  icons: any[]= [{type:"restaurant",url:"assets/mapIcons/restaurant.png",scaledSize:new google.maps.Size(22, 32)},
  {type:"bar",url:"assets/mapIcons/bar.png",scaledSize:new google.maps.Size(22, 32)},
  {type:"city",url:"assets/mapIcons/city.png",scaledSize:new google.maps.Size(22, 32)},
  {type:"dorm",url:"assets/mapIcons/dorm.png",scaledSize:new google.maps.Size(22, 32)},
  {type:"faculty",url:"assets/mapIcons/faculty.png",scaledSize:new google.maps.Size(22, 32)},
  {type:"interest",url:"assets/mapIcons/interest.png",scaledSize:new google.maps.Size(22, 32)}];

  constructor() {
    console.log('Hello MapProvider Provider');
  }


  initMap(mapElement: any, locations: any) {
    
    
      //Maribor latlng setting
    let latlng = new google.maps.LatLng(46.554650, 15.645881);

    let mapOptions = {
      center: latlng,
      zoom: 13,
      styles:[{
            featureType: 'poi.business',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          }]
    };
    let map = new google.maps.Map(mapElement.nativeElement, mapOptions);

    this.setLocations(locations, map);
    
    //this.setMarkerIcon(this.markers,"http://megaicons.net/static/img/icons_sizes/8/178/32/catering-restaurant-icon.png");
    return Promise.resolve(map);

    
  }

   //FirebaseListObservable<any> 
  setLocations(locations: any, map:any){

      locations.forEach(location=>{
        console.log(location.title);
        this.createMarker(location);
         
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
       if (location.type != undefined && location.type !="event") {
        this.setMarkerIcon(marker, location.type)
      }else if (location.type=="event"){
        this.setMarkerImage(marker);
      }
      this.markers.push(marker);
  }

 

  showAllEvents(map:any) {
    for (let marker of this.markers) {
      if(marker.type=="event"){
        marker.setMap(map);
      }
      
    }
  }
  showMarkers(map:any,type:String){
    for (let marker of this.markers){
      if(type==marker.type){
        marker.setMap(map);
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
          marker.setIcon(icon);
        }
      }
  }
  setMarkerImage(marker:any){
    let imageIcon={url:location,scaledSize:new google.maps.Size(22, 32)}
  }
}
