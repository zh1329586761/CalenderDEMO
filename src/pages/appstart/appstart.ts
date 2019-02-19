import { TabsPage } from './../tabs/tabs';
import { ShixiangPage } from './../shixiang/shixiang';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the AppstartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appstart',
  templateUrl: 'appstart.html',
})
export class AppstartPage {
  public LoginPage=LoginPage;
  public TabsPage=TabsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppstartPage');
  }

  goLogin(){
    this.navCtrl.push(LoginPage);
  }

  goRegister(){
    this.navCtrl.push(RegisterPage)
  }

  dismissStart(){
    this.navCtrl.push(TabsPage)
  }
}
