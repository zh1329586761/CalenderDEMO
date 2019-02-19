import { SettingsPage } from './../settings/settings';
import { Component,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MubanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muban',
  templateUrl: 'muban.html',
})
export class MubanPage {
  public SettingsPage=SettingsPage;
  public tabs="muban";
  public isfenlei=false;
  public islaiyuan=false;
  public isadd=true;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private el:ElementRef,
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MubanPage');
  }
  // 改变分类切换
  changeisfenlei(){
    this.isfenlei=!this.isfenlei;
    this.islaiyuan=false;
    console.log(this.isfenlei);
  }
  // 改变来源切换
  changeislaiyuan(){
    this.islaiyuan=!this.islaiyuan;
    this.isfenlei=false;
    console.log(this.islaiyuan);
  }
  // 改变加减展开切换
  changeAdd(){
    this.isadd=!this.isadd;
    console.log("isadd为"+this.isadd)
  }




  changecolor1(){
    console.log(this.el.nativeElement.querySelector('.chip').style.color);
    console.log(this.el.nativeElement.querySelector('.chip').style.background);
    this.el.nativeElement.querySelector('.chip').style.color='#fff';
    this.el.nativeElement.querySelector('.chip').style.background='#488aff';
  }

  changecolor2(){
    
  }
}
