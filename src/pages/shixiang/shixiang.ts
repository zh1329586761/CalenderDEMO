import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShixiangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shixiang',
  templateUrl: 'shixiang.html',
})
export class ShixiangPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShixiangPage');
  }

}
