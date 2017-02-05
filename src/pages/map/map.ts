import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapProvider } from '../../providers/map-provider';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public mapService: MapProvider) {}

/// TODO SPREMENI IN PREMAKNI V PROVIDERJA
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.map=this.mapService.initMap(this.mapElement);
  }

}
