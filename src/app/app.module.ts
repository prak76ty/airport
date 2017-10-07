import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { ChatPage } from '../pages/chat/chat';
import { PostPage } from '../pages/post/post';
import { PchatPage } from '../pages/pchat/pchat';
import { TagPage } from '../pages/tag/tag';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var config = {
   apiKey: "AIzaSyBBPfdVeYhtxDB1SyJAjfztSP4mRj6SexE",
   authDomain: "airport-94213.firebaseapp.com",
   databaseURL: "https://airport-94213.firebaseio.com",
   projectId: "airport-94213",
   storageBucket: "airport-94213.appspot.com",
   messagingSenderId: "489475164251"
 };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    PostPage,
    PchatPage,
    TagPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    PchatPage,
    PostPage,
    TagPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
