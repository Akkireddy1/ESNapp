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
  private selectedLocations: any = { faculties: false, bars: false, restaurants: false, city: false, activities: false, dorms: false };

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

  toggleSelection(type: string) {
    switch (type) {
      case "bar":
        if (this.selectedLocations.bars == false) {
          this.selectedLocations.bars = true;
          this.mapService.showMarkers(type);
        } else if (this.selectedLocations.bars == true) {
          this.selectedLocations.bars = false;
          this.mapService.showMarkers(type);
        }

        break;
      case "faculty":
        if (this.selectedLocations.faculties == false) {
          this.selectedLocations.faculties = true;
          this.mapService.showMarkers(type);
        } else if (this.selectedLocations.faculties == true) {
          this.selectedLocations.faculties = false;
          this.mapService.showMarkers(type);
        }
        break;

      case "restaurant":
        if (this.selectedLocations.restaurants == false) {
          this.selectedLocations.restaurants = true;
          this.mapService.showMarkers(type);
        } else if (this.selectedLocations.restaurants == true) {
          this.selectedLocations.restaurants = false;
          this.mapService.showMarkers(type);
        }
        break;

      case "city":
        if (this.selectedLocations.city == false) {
          this.selectedLocations.city = true;
          this.mapService.showMarkers(type);
        } else if (this.selectedLocations.city == true) {
          this.selectedLocations.city = false;
          this.mapService.showMarkers(type);
        }
        break;

      case "activity":
        if (this.selectedLocations.activities == false) {
          this.selectedLocations.activities = true;
          this.mapService.showMarkers(type);
        } else if (this.selectedLocations.activities == true) {
          this.selectedLocations.activities = false;
          this.mapService.showMarkers(type);
        }
        break;

      case "dorm":
        if (this.selectedLocations.dorms == false) {
          this.selectedLocations.dorms = true;
          this.mapService.showMarkers(type);
        } else if (this.selectedLocations.dorms == true) {
          this.selectedLocations.dorms = false;
          this.mapService.showMarkers(type);
        }
        break;

    }
  }

}
