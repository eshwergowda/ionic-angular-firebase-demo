import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private app: App) {

  }

  logout() {
    // API token remove

    // To route to the app's main page. Else was still consuming the tabs
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
