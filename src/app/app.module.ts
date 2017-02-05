import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EventsPage } from '../pages/events/events';
import { MapPage } from '../pages/map/map';
import { GalleryPage } from '../pages/gallery/gallery';
import {MapProvider} from '../providers/map-provider';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
   apiKey: "AIzaSyAwx6fDmhuP3zVZ8sRNo6GfE5ec9dFL-TA",
   authDomain: "esnapp-bf5b6.firebaseapp.com",
   databaseURL: "https://esnapp-bf5b6.firebaseio.com",
   storageBucket: "esnapp-bf5b6.appspot.com",
   messagingSenderId: "758512322300"
};




@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    EventsPage,
    MapPage,
    GalleryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    EventsPage,
    MapPage,
    GalleryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MapProvider]
})
export class AppModule {}
