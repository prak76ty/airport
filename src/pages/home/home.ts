import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { TagPage } from '../tag/tag';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    username: string = '';
    topping: string = '';
    flight: string = '';
    myDate: string = '';
    myTime:string = '';

  constructor(public navCtrl: NavController,
      private alertCtrl: AlertController) {

  }

    showAlert(title: string, message: string) {
      let alertBox = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['OK']
      });
      alertBox.present();
    }

    loginUser() {
        if('true') {
            // all cool
            this.navCtrl.push(TagPage, {
                username: this.username,
                topping: this.topping,
                flight: this.flight,
                myDate: this.myDate,
                myTime: this.myTime
            });

        } else {
            this.showAlert('Error', 'Invalid Username');
        }
    }

}
