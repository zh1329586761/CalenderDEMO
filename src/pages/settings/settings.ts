import { SettingsListPage } from './../settings-list/settings-list';
import { HttpServicesProvider } from './../../providers/http-services/http-services';
import { PersonalPage } from './../personal/personal';
import { RegisterPage } from './../register/register';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public LoginPage=LoginPage;
  public RegisterPage=RegisterPage;
  public PersonalPage=PersonalPage;
  public SettingsListPage=SettingsListPage;
  // public isLogin=false;
  public userinfo='';
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public storage:StorageProvider,
     public httpservices:HttpServicesProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  ionViewWillEnter(){
    var userinfo=this.storage.get("userinfo");
      if (userinfo&&userinfo.username) {  /* 如果已经登录 */
 
        this.userinfo=userinfo;
      } else{
       this.userinfo='';
      }
    
   }
}
