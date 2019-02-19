import { ScanPage } from './../scan/scan';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LianxirenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lianxiren',
  templateUrl: 'lianxiren.html',
})
export class LianxirenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LianxirenPage');
  }

  gotoscanQR(){
    this.navCtrl.push(ScanPage,null,{"animate":false});
    console.log("扫一扫")
  }
}
