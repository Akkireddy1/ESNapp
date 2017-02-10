import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapProvider } from '../../providers/map-provider';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement;
  map: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public mapService: MapProvider) {
    
  }

/// TODO SPREMENI IN PREMAKNI V PROVIDERJA
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.map=this.mapService.initMap(this.mapElement, this.loadLocations());
  }


  //get all google locations for creating a markers
  loadLocations(){
    var locations=[
      {
      position:new google.maps.LatLng(46.554650, 15.645881),
      type:'restaurant'
    },
    {
      position:new google.maps.LatLng(46.5584864, 15.6449621),
      type:'restaurant'
    },
    {
      position:new google.maps.LatLng(46.5628445, 15.6298367),
      type:'restaurant'
    }
    ]
    console.log("locations loaded: "+locations[0].position);
    return locations;
  }

}
