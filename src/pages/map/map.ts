import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapProvider } from '../../providers/map-provider';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement;
  map: any;
  observableLocations: FirebaseListObservable<any>;
  locations=[];
  private selectedLocations: any = { faculties: false, bars: false, restaurants: false, city: false, activities: false, dorms: false };

  constructor(public navCtrl: NavController, public navParams: NavParams,public mapService: MapProvider, af: AngularFire) {
    this.observableLocations=af.database.list('/locations');
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    //calling mapService with still empty locations list (because it takes a while to get response from firebase)
    this.mapService.initMap(this.mapElement, this.locations).then((resolve)=>{
      //it returns map which already displays
      this.map=resolve;
      //then I start creating locations array from FirebaseListObservable
       this.observableLocations.subscribe(snapshot=>{
      snapshot.forEach(location=>{
        this.locations.push(location); 
        console.log("location pushed: "+location.title);
      });
      //when the array if filled up I call MapProvider's set location function and pas new list
      this.mapService.setLocations(this.locations,this.map);
       });
      });
    
  }

  toggleSelection(type: string) {
    switch (type) {
      case "bar":
        if (this.selectedLocations.bars == false) {
          this.selectedLocations.bars = true;
          this.mapService.showMarkers(this.map,type);
        } else if (this.selectedLocations.bars == true) {
          this.selectedLocations.bars = false;
          this.mapService.hideMarkers(type);
        }

        break;
      case "faculty":
        if (this.selectedLocations.faculties == false) {
          this.selectedLocations.faculties = true;
          this.mapService.showMarkers(this.map,type);
        } else if (this.selectedLocations.faculties == true) {
          this.selectedLocations.faculties = false;
          this.mapService.hideMarkers(type);
        }
        break;

      case "restaurant":
        if (this.selectedLocations.restaurants == false) {
          this.selectedLocations.restaurants = true;
          this.mapService.showMarkers(this.map,type);
        } else if (this.selectedLocations.restaurants == true) {
          this.selectedLocations.restaurants = false;
          this.mapService.hideMarkers(type);
        }
        break;

      case "city":
        if (this.selectedLocations.city == false) {
          this.selectedLocations.city = true;
          this.mapService.showMarkers(this.map,type);
        } else if (this.selectedLocations.city == true) {
          this.selectedLocations.city = false;
          this.mapService.hideMarkers(type);
        }
        break;

      case "activity":
        if (this.selectedLocations.activities == false) {
          this.selectedLocations.activities = true;
          this.mapService.showMarkers(this.map,type);
        } else if (this.selectedLocations.activities == true) {
          this.selectedLocations.activities = false;
          this.mapService.hideMarkers(type);
        }
        break;

      case "dorm":
        if (this.selectedLocations.dorms == false) {
          this.selectedLocations.dorms = true;
          this.mapService.showMarkers(this.map,type);
        } else if (this.selectedLocations.dorms == true) {
          this.selectedLocations.dorms = false;
          this.mapService.hideMarkers(type);
        }
        break;
    }
  }

}
