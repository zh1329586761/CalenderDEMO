import { Calendar } from 'ionic3-calendar/src/calendar/calendar';
import { SettingsPage } from './../settings/settings';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { CalendarModule } from 'ionic3-calendar';
import { calendarFormat } from 'moment';
import { ActionSheetController } from 'ionic-angular';
import { CalendarController } from '../calendar/calendar-controller';
import * as moment from 'moment';
/**
 * Generated class for the TixingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tixing',
  templateUrl: 'tixing.html',
})
export class TixingPage {
  date: string;
  public SettingsPage=SettingsPage;
  public isHidden=true;/* 隐藏日历 */
  public isshowUnder=false;/* 按钮切换 */
  public tabs:string = "tx";
  // public isCalendar=true;
  // public bottomHidden=true;
  chromeReleased = '2019-09';/*日历默认日期 */

  public istxList:any=false;/* 判断是否有列表，然后下方显示列表或者图标  */
  public iscjList:any=false;
  public isksList:any=false;
  public isjsList:any=false;
  public isgdList:any=false;

  public list_title=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private calendarCtrl: CalendarController,
    ) {
      // for (let i = 1; i < 10; i++) {
      //   this.list_title.push({
      //     tx:"这是第"+i+"条提醒",
      //     cj:"这是第"+i+"条提醒",
      //     ks:"这是第"+i+"条提醒",
      //     js:"这是第"+i+"条提醒",
      //     gd:"这是第"+i+"条提醒",
      //   })
        
      // } 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TixingPage');
    
  }

  
  showUnder(){
    console.log("显示/隐藏下面成功")
    this.isHidden=!this.isHidden;
    this.isshowUnder=!this.isshowUnder;
    // this.isCalendar=!this.isCalendar;
    // console.log("isCalendar"+this.isCalendar);
    console.log("isHidden"+this.isHidden);
    console.log("isshowUnder"+this.isshowUnder);
  }

  showTop(){
    console.log("显示/隐藏下面成功")
   
    this.isshowUnder=!this.isshowUnder;
    console.log("isshowUnder"+this.isshowUnder);
  }

  hiddenfour(){
    console.log("隐藏上面成功")
    // this.bottomHidden=!this.bottomHidden;
  }

  
  /* 底端弹出 */
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [
        {
          text: '新建提醒',
          handler: () => {
            console.log('新建提醒');
            this.tabs="tx";
            this.istxList=true;
              for (let i = 1; i < 10; i++) {
                this.list_title.push({
                  tx:"这是第"+i+"条提醒",
                })
              } 
          }
        },
        {
          text: '创建任务',
          handler: () => {
            console.log('创建任务');
            this.tabs="cj";
            this.iscjList=true;
            for (let i = 1; i < 10; i++) {
              this.list_title.push({
                cj:"这是第"+i+"条创建",
              })
            } 
          }
        },
        {
          text: '开始任务',
          handler: () => {
            this.tabs="ks";
            console.log('开始任务');
            this.isksList=true;
          }
        },
        {
          text: '结束任务',
          handler: () => {
            this.tabs="js";
            console.log('结束任务');
            this.isjsList=true;
          }
        },
        {
          text: '归档任务',
          handler: () => {
            this.tabs="gd";
            console.log('归档任务');
            this.isgdList=true;
          }
        },
        {
          text: '取消',
          role: '取消',
          handler: () => {
            console.log('取消');
          }
        },
        
      ]
    });
    actionSheet.present();
  }


  today() {
    this.date = moment().format('YYYY-MM-DD');
  }

  selectDate() {
    this.calendarCtrl.selectDate();
  }

  changeDate(date: string) {
    console.log(date, '当前日期');
  }
}