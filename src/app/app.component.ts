import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { LoginPage } from '../pages/login/login';
import { TesthomePage } from '../pages/testhome/testhome';
import { HomePage } from '../pages/home/home';
import { CartePage } from '../pages/carte/carte';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = CartePage
  constructor(platform: Platform, public SplashScreen: SplashScreen, public StatusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.StatusBar.styleDefault();
      this.SplashScreen.hide();
    });
  }
}
