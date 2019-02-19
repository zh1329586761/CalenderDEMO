import { HttpServicesProvider } from './../../providers/http-services/http-services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
 

  public userinfo='';
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage:StorageProvider,
    public httpservices:HttpServicesProvider,
    
    ) {
  

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }


  loginOut(){

    //用户信息保存在localstorage


    this.storage.remove('userinfo');

    //跳转到用户中心

    this.navCtrl.popToRoot();

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
