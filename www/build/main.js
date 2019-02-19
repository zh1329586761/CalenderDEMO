webpackJsonp([15],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_qr_scanner__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPage = /** @class */ (function () {
    function ScanPage(navCtrl, navParams, alertCtrl, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.qrScanner = qrScanner;
    }
    ScanPage.prototype.ionViewDidEnter = function () {
        this.scanQRcode();
    };
    ScanPage.prototype.scanQRcode = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            // 授权
            if (status.authorized) {
                window.document.querySelector('body').classList.add('transparent-body');
                // 让相机扫描
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    var alert = _this.alertCtrl.create({
                        title: '二维码内容',
                        subTitle: text,
                        buttons: ['OK']
                    });
                    alert.present();
                    scanSub_1.unsubscribe();
                });
                _this.qrScanner.show();
            }
            else if (status.denied) {
                //提醒用户权限没有开
            }
            else {
            }
        })
            .catch(function (e) { return console.error('Error :', e); });
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\scan\scan.html"*/'<ion-header>\n\n    <ion-navbar color="light">\n      <ion-title>扫一扫</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  <div class="zhong">\n    <div class="line"></div>\n  </div>'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\scan\scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppstartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AppstartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppstartPage = /** @class */ (function () {
    function AppstartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LoginPage = __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */];
        this.TabsPage = __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */];
    }
    AppstartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppstartPage');
    };
    AppstartPage.prototype.goLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */]);
    };
    AppstartPage.prototype.goRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    AppstartPage.prototype.dismissStart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
    };
    AppstartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-appstart',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\appstart\appstart.html"*/'<!--\n  Generated template for the AppstartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  \n</ion-header>\n\n\n<ion-content>\n    <div class="login_pc" >\n      <div class="btn3">\n            <div (click)="goLogin()" class="login_btn">登    录</div>\n            <div (click)="goRegister()" class="login_btn">注    册</div>\n            <div (click)="dismissStart()" class="login_btn">随便逛逛</div>\n      </div>\n      </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\appstart\appstart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], AppstartPage);
    return AppstartPage;
}());

//# sourceMappingURL=appstart.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TixingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar_controller__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TixingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TixingPage = /** @class */ (function () {
    function TixingPage(navCtrl, navParams, actionSheetCtrl, calendarCtrl) {
        // for (let i = 1; i < 10; i++) {
        //   this.list_title.push({
        //     tx:"这是第"+i+"条提醒",
        //     cj:"这是第"+i+"条提醒",
        //     ks:"这是第"+i+"条提醒",
        //     js:"这是第"+i+"条提醒",
        //     gd:"这是第"+i+"条提醒",
        //   })
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.calendarCtrl = calendarCtrl;
        this.SettingsPage = __WEBPACK_IMPORTED_MODULE_0__settings_settings__["a" /* SettingsPage */];
        this.isHidden = true; /* 隐藏日历 */
        this.isshowUnder = false; /* 按钮切换 */
        this.tabs = "tx";
        // public isCalendar=true;
        // public bottomHidden=true;
        this.chromeReleased = '2019-09'; /*日历默认日期 */
        this.istxList = false; /* 判断是否有列表，然后下方显示列表或者图标  */
        this.iscjList = false;
        this.isksList = false;
        this.isjsList = false;
        this.isgdList = false;
        this.list_title = [];
        // } 
    }
    TixingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TixingPage');
    };
    TixingPage.prototype.showUnder = function () {
        console.log("显示/隐藏下面成功");
        this.isHidden = !this.isHidden;
        this.isshowUnder = !this.isshowUnder;
        // this.isCalendar=!this.isCalendar;
        // console.log("isCalendar"+this.isCalendar);
        console.log("isHidden" + this.isHidden);
        console.log("isshowUnder" + this.isshowUnder);
    };
    TixingPage.prototype.showTop = function () {
        console.log("显示/隐藏下面成功");
        this.isshowUnder = !this.isshowUnder;
        console.log("isshowUnder" + this.isshowUnder);
    };
    TixingPage.prototype.hiddenfour = function () {
        console.log("隐藏上面成功");
        // this.bottomHidden=!this.bottomHidden;
    };
    /* 底端弹出 */
    TixingPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            // title: 'Modify your album',
            buttons: [
                {
                    text: '新建提醒',
                    handler: function () {
                        console.log('新建提醒');
                        _this.tabs = "tx";
                        _this.istxList = true;
                        for (var i = 1; i < 10; i++) {
                            _this.list_title.push({
                                tx: "这是第" + i + "条提醒",
                            });
                        }
                    }
                },
                {
                    text: '创建任务',
                    handler: function () {
                        console.log('创建任务');
                        _this.tabs = "cj";
                        _this.iscjList = true;
                        for (var i = 1; i < 10; i++) {
                            _this.list_title.push({
                                cj: "这是第" + i + "条创建",
                            });
                        }
                    }
                },
                {
                    text: '开始任务',
                    handler: function () {
                        _this.tabs = "ks";
                        console.log('开始任务');
                        _this.isksList = true;
                    }
                },
                {
                    text: '结束任务',
                    handler: function () {
                        _this.tabs = "js";
                        console.log('结束任务');
                        _this.isjsList = true;
                    }
                },
                {
                    text: '归档任务',
                    handler: function () {
                        _this.tabs = "gd";
                        console.log('归档任务');
                        _this.isgdList = true;
                    }
                },
                {
                    text: '取消',
                    role: '取消',
                    handler: function () {
                        console.log('取消');
                    }
                },
            ]
        });
        actionSheet.present();
    };
    TixingPage.prototype.today = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_4_moment__().format('YYYY-MM-DD');
    };
    TixingPage.prototype.selectDate = function () {
        this.calendarCtrl.selectDate();
    };
    TixingPage.prototype.changeDate = function (date) {
        console.log(date, '当前日期');
    };
    TixingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tixing',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\tixing\tixing.html"*/'<ion-header >\n\n\n\n  <ion-navbar color="dark">\n\n      <ion-buttons start>\n\n          <button ion-button [navPush]="SettingsPage">\n\n            <ion-icon name="cog" class="settingsIcon"></ion-icon>\n\n          </button>\n\n     </ion-buttons>\n\n\n\n    <ion-title  (click)="selectDate()">\n\n        <!-- <ion-datetime displayFormat="YYYY-MM" min="1990-01" max="2034-12" [(ngModel)]="chromeReleased" cancelText="取消" doneText="确定"></ion-datetime> -->\n\n        {{date}}\n\n        <ion-icon name="calendar"></ion-icon>\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <!-- <button ion-button (tap)="calendar.today()">今天</button> -->\n\n      <button ion-button (click)="today()">今天</button>\n\n   </ion-buttons>\n\n    \n\n\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <div class="top">\n\n\n\n      <ion-chip  class="ml bluebtn" (tap)="showUnder()"  text-center>\n\n          <ion-icon name="ios-arrow-down" *ngIf="isshowUnder" ></ion-icon>\n\n          <ion-icon name="ios-arrow-up" *ngIf="!isshowUnder" ></ion-icon>\n\n        </ion-chip>\n\n\n\n      <ion-chip color="danhuise" style="width:40px;text-align:center" class="chip ml">\n\n          <ion-label>日</ion-label>\n\n        </ion-chip>\n\n      <ion-chip color="danhuise" style="width:80px;text-align:center" class="ml">\n\n          <ion-label>行事历</ion-label>\n\n        </ion-chip>\n\n      <ion-chip color="danhuise"  style="width:50px;text-align:center" class="ml">\n\n          <ion-label>周</ion-label>\n\n        </ion-chip>\n\n\n\n        <ion-chip color="primary" class="more" (tap)="presentActionSheet()">\n\n            <ion-icon name="md-more" color="primary"></ion-icon>\n\n          </ion-chip>\n\n\n\n  </div>\n\n  <div class="mid" *ngIf="isHidden">  <!-- *ngIf="isHidden" 启用隐藏的话 error-->\n\n    <calendar [(ngModel)]="date" (onChange)="changeDate($event)"></calendar>\n\n          <!-- 日历插件 -->\n\n       \n\n  </div>\n\n  <div class="bottom">\n\n    <div class="bottom_header" *ngIf="isHidden" >\n\n        <ion-segment [(ngModel)]="tabs">\n\n          \n\n            <ion-segment-button value="tx">\n\n              提醒\n\n            </ion-segment-button>\n\n            <ion-segment-button value="cj">\n\n              创建\n\n            </ion-segment-button>\n\n            <ion-segment-button value="ks">\n\n              开始\n\n              </ion-segment-button>\n\n            <ion-segment-button value="js">\n\n              结束\n\n              </ion-segment-button>\n\n            <ion-segment-button value="gd">\n\n              归档\n\n              </ion-segment-button>\n\n\n\n        </ion-segment>\n\n    </div>\n\n\n\n    <div [ngSwitch]="tabs">\n\n        <div class="bottom_content">\n\n            <div *ngSwitchCase="\'tx\'">\n\n                <div class="tx_list" *ngIf="istxList" >\n\n                    <ion-item *ngFor="let l of list_title" >\n\n                      {{l.tx}}\n\n                    </ion-item>\n\n                </div>\n\n                <div class="tx null" *ngIf="!istxList" >\n\n                      <ion-icon name="filing" text-center></ion-icon>\n\n                      <p>在当前时间没有设置过提醒</p>\n\n                </div>\n\n           </div>\n\n        </div>\n\n        <div class="bottom_content">\n\n            <div *ngSwitchCase="\'cj\'">\n\n                    <ion-icon name="filing" text-center></ion-icon>\n\n                    <p>在当前时间没有创建过事项</p>\n\n              </div>\n\n        </div>\n\n        <div class="bottom_content">\n\n            <div *ngSwitchCase="\'ks\'">\n\n                    <ion-icon name="filing" text-center></ion-icon>\n\n                    <p>在当前时间没有事项开始过</p>\n\n              </div>\n\n        </div>\n\n        <div class="bottom_content">\n\n            <div *ngSwitchCase="\'js\'">\n\n                    <ion-icon name="filing" text-center></ion-icon>\n\n                    <p>在当前时间没有事项结束过</p>\n\n              </div>\n\n        </div>\n\n        <div class="bottom_content">\n\n            <div *ngSwitchCase="\'gd\'">\n\n                    <ion-icon name="filing" text-center></ion-icon>\n\n                    <p>在当前时间没有归档过事项</p>\n\n              </div>\n\n        </div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\tixing\tixing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__calendar_calendar_controller__["a" /* CalendarController */]])
    ], TixingPage);
    return TixingPage;
}());

//# sourceMappingURL=tixing.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsListPage = /** @class */ (function () {
    function SettingsListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsListPage');
    };
    SettingsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-list',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\settings-list\settings-list.html"*/'<!--\n  Generated template for the SettingsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>待完善页面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  正在开发中。。。\n</ion-content>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\settings-list\settings-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsListPage);
    return SettingsListPage;
}());

//# sourceMappingURL=settings-list.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_services_http_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalPage = /** @class */ (function () {
    function PersonalPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.userinfo = '';
    }
    PersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalPage');
    };
    PersonalPage.prototype.loginOut = function () {
        //用户信息保存在localstorage
        this.storage.remove('userinfo');
        //跳转到用户中心
        this.navCtrl.popToRoot();
    };
    PersonalPage.prototype.ionViewWillEnter = function () {
        var userinfo = this.storage.get("userinfo");
        if (userinfo && userinfo.username) {
            this.userinfo = userinfo;
        }
        else {
            this.userinfo = '';
        }
    };
    PersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-personal',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\personal\personal.html"*/'<!--\n  Generated template for the PersonalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>账户资料</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list inset class="personal">\n    <ion-item>\n         头像\n        <span class="item-note">\n            <img  src="../../assets/imgs/xfn.png" class="avatar"/>\n        </span>\n\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </ion-item>\n\n    \n\n      <ion-item>\n        \n        用户名\n        <span class="item-note">\n          {{userinfo.username}}\n        </span>         \n        \n        <ion-icon name="ios-arrow-forward" item-end style="visibility:hidden"></ion-icon>\n      </ion-item>\n\n      <ion-item class="item-icon-right">\n          \n          昵称\n        <span class="item-note">\n          天王盖地虎\n        </span>\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item>            \n        <ion-label>性别</ion-label>\n        <ion-select>\n          <ion-option value="man" selected="true">男</ion-option>\n          <ion-option value="woman">女</ion-option>\n          <ion-option value="null">保密</ion-option>\n        </ion-select>\n\n        \n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>出生年月</ion-label>\n        <ion-select>\n          <ion-option value="01">1月</ion-option>\n          <ion-option value="02">2月</ion-option>\n          <ion-option value="03" selected="true">3月</ion-option>\n          <ion-option value="04">4月</ion-option>\n          <ion-option value="05">5月</ion-option>\n          <ion-option value="06">6月</ion-option>\n          <ion-option value="07">7月</ion-option>\n          <ion-option value="08">8月</ion-option>\n          <ion-option value="09">9月</ion-option>\n          <ion-option value="10">10月</ion-option>\n          <ion-option value="11">11月</ion-option>\n          <ion-option value="12">12月</ion-option>\n        </ion-select>\n        \n        <ion-select>\n          <ion-option>2019年</ion-option>\n          <ion-option>2018年</ion-option>\n          <ion-option>2017年</ion-option>\n          <ion-option>2016年</ion-option>\n          <ion-option>2015年</ion-option>\n          <ion-option selected="true">2014年</ion-option>\n          <ion-option>2013年</ion-option>\n          <ion-option>2012年</ion-option>\n          <ion-option>2011年</ion-option>\n          <ion-option>2010年</ion-option>\n          <ion-option>2009年</ion-option>\n        </ion-select>\n        \n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n</ion-list>\n\n<button ion-button block color="danger" class="exit_btn" (tap)="loginOut()">退出登录</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\personal\personal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], PersonalPage);
    return PersonalPage;
}());

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistersignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerpassword_registerpassword__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegistersignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistersignPage = /** @class */ (function () {
    function RegistersignPage(navCtrl, navParams, httpservices, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservices = httpservices;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.code = ''; /* 默认空的验证码 */
        this.showcode = false; /*    在验证码倒计时和重新发送中切换  前面html中用ngif判断 */
        this.num = 5; /*  倒数计时的数量 */
        this.tel = '';
        this.tel = this.storage.get('reg_tel');
    }
    RegistersignPage.prototype.ionViewDidLoad = function () {
        this.doTimer();
    };
    RegistersignPage.prototype.goRegisterpasswordPage = function () {
        var _this = this;
        if (/^\d{4}$/.test(this.code)) {
            // 验证验证码是否正确
            var api = 'api/validateCode';
            this.httpservices.doPost(api, { "tel": this.tel, "code": this.code }, function (result) {
                console.log(result); /* 测试 */
                if (result.success) {
                    //  保存验证码
                    _this.storage.set('reg_code', _this.code);
                    // 跳转到下个页面
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registerpassword_registerpassword__["a" /* RegisterpasswordPage */]);
                }
                else {
                    alert("验证码错误，请重新输入");
                }
            });
        }
        else {
            alert("验证码位数不正确");
        }
    };
    // 倒计时的方法
    RegistersignPage.prototype.doTimer = function () {
        var _this = this;
        var timer = setInterval(function () {
            --_this.num;
            if (_this.num == 0) {
                clearInterval(timer);
                _this.showcode = true;
            }
        }, 1000);
    };
    // 发送验证码
    RegistersignPage.prototype.sendCode = function () {
        // 获取电话号码
        var _this = this;
        // console.log("请重新发送验证码")
        var api = 'api/sendCode';
        this.httpservices.doPost(api, { "tel": this.tel, "code": this.tel }, function (result) {
            console.log(result); /* 测试 */
            console.log(result.code);
            _this.presentToast(result);
            if (result.success) {
                _this.num = 10; /* 设置倒计时 */
                _this.doTimer(); /* 倒计时 */
                _this.showcode = false; /* 显示倒计按钮 */
            }
            else {
                alert("发送错误了噢，请重新发送");
            }
        });
    };
    /* 弹出验证码 */
    RegistersignPage.prototype.presentToast = function (result) {
        var toast = this.toastCtrl.create({
            message: result.code,
            duration: 3000
        });
        toast.present();
    };
    RegistersignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registersign',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\registersign\registersign.html"*/'<!--\n  Generated template for the RegistersignPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>发送短信界面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="code-info">\n    <h4 class="positive">马上验证手机,激活你的账户</h4>\n    <p class="code-sign-p">验证码已通过短信方式发送至{{tel}},请输入验证码完成验证登录!</p>\n  </div>\n\n  <div class="sign-page">\n    <input type="text" [(ngModel)]="code" placeholder="验证码" maxlength="4">\n    <div class="timer" *ngIf="!showcode" >倒计时{{num}}</div>\n    <div class="timer" *ngIf="showcode"  (tap)="sendCode()">重新发送</div>\n  </div>\n\n  <button ion-button  block class="msg-btn" (tap)="goRegisterpasswordPage()" >下一步</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\registersign\registersign.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], RegistersignPage);
    return RegistersignPage;
}());

//# sourceMappingURL=registersign.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterpasswordPage = /** @class */ (function () {
    function RegisterpasswordPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.tel = '';
        this.code = '';
        this.password = '';
        this.rpassword = '';
        this.tel = storage.get('reg_tel');
        this.code = storage.get('reg_code');
    }
    RegisterpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterpasswordPage');
    };
    RegisterpasswordPage.prototype.doRegister = function () {
        var _this = this;
        if (this.password != this.rpassword) {
            alert('确认密码和密码不一致');
        }
        else if (this.password.length < 6) {
            alert('密码长度不能小于六位');
        }
        else {
            var api = 'api/register';
            this.httpservices.doPost(api, { "tel": this.tel,
                "code": this.code,
                "password": this.password, }, function (result) {
                console.log(result); /* 测试 */
                if (result.success) {
                    // 保存用户信息
                    _this.storage.set('userinfo', result.userinfo[0]);
                    _this.navCtrl.popToRoot(); /* 回到根页面 */
                }
                else {
                    alert("注册失败");
                }
            });
        }
    };
    RegisterpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registerpassword',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\registerpassword\registerpassword.html"*/'<!--\n  Generated template for the RegisterpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>填写密码界面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list >\n  \n      <ion-item id="lf">\n          \n          <ion-input type="password" placeholder="请输入密码" [(ngModel)]="password"></ion-input>\n      </ion-item>\n      <ion-item id="lf">\n          \n          <ion-input type="password" placeholder="确认密码" [(ngModel)]="rpassword"></ion-input>\n      </ion-item>\n      \n      <ion-item no-lines class="reg-text" id="lf">\n        <span item-end>\n          本密码由6-26为字母、数字、特殊符号组成，注意大小写!\n        </span>\n      </ion-item>\n\n    </ion-list>\n\n     <button ion-button  block class="next-btn"  (click)="doRegister()" >完成</button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\registerpassword\registerpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], RegisterpasswordPage);
    return RegisterpasswordPage;
}());

//# sourceMappingURL=registerpassword.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LianxirenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scan_scan__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LianxirenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LianxirenPage = /** @class */ (function () {
    function LianxirenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LianxirenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LianxirenPage');
    };
    LianxirenPage.prototype.gotoscanQR = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__scan_scan__["a" /* ScanPage */], null, { "animate": false });
        console.log("扫一扫");
    };
    LianxirenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-lianxiren',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\lianxiren\lianxiren.html"*/'<!--\n\n  Generated template for the LianxirenPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="dark">\n\n    \n\n    <ion-title>联系人</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="gotoscanQR()" >\n\n          <ion-icon name="qr-scanner"  ></ion-icon>\n\n        </button>\n\n     </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\lianxiren\lianxiren.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], LianxirenPage);
    return LianxirenPage;
}());

//# sourceMappingURL=lianxiren.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShixiangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ShixiangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShixiangPage = /** @class */ (function () {
    function ShixiangPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShixiangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShixiangPage');
    };
    ShixiangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shixiang',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\shixiang\shixiang.html"*/'<!--\n\n  Generated template for the ShixiangPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="dark">\n\n    <ion-title>工作事项</ion-title>\n\n    <!-- <ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar> -->\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\shixiang\shixiang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShixiangPage);
    return ShixiangPage;
}());

//# sourceMappingURL=shixiang.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaifaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DaifaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DaifaPage = /** @class */ (function () {
    function DaifaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DaifaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DaifaPage');
    };
    DaifaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-daifa',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\daifa\daifa.html"*/'<!--\n\n  Generated template for the DaifaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="dark">\n\n    <ion-title>待发</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\daifa\daifa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DaifaPage);
    return DaifaPage;
}());

//# sourceMappingURL=daifa.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MubanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MubanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MubanPage = /** @class */ (function () {
    function MubanPage(navCtrl, navParams, el) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.el = el;
        this.SettingsPage = __WEBPACK_IMPORTED_MODULE_0__settings_settings__["a" /* SettingsPage */];
        this.tabs = "muban";
        this.isfenlei = false;
        this.islaiyuan = false;
        this.isadd = true;
    }
    MubanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MubanPage');
    };
    // 改变分类切换
    MubanPage.prototype.changeisfenlei = function () {
        this.isfenlei = !this.isfenlei;
        this.islaiyuan = false;
        console.log(this.isfenlei);
    };
    // 改变来源切换
    MubanPage.prototype.changeislaiyuan = function () {
        this.islaiyuan = !this.islaiyuan;
        this.isfenlei = false;
        console.log(this.islaiyuan);
    };
    // 改变加减展开切换
    MubanPage.prototype.changeAdd = function () {
        this.isadd = !this.isadd;
        console.log("isadd为" + this.isadd);
    };
    MubanPage.prototype.changecolor1 = function () {
        console.log(this.el.nativeElement.querySelector('.chip').style.color);
        console.log(this.el.nativeElement.querySelector('.chip').style.background);
        this.el.nativeElement.querySelector('.chip').style.color = '#fff';
        this.el.nativeElement.querySelector('.chip').style.background = '#488aff';
    };
    MubanPage.prototype.changecolor2 = function () {
    };
    MubanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-muban',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\muban\muban.html"*/'<!--\n\n  Generated template for the MubanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="dark">\n\n\n\n      <ion-buttons start>\n\n          <button ion-button [navPush]="SettingsPage">\n\n            <ion-icon name="cog" class="settingsIcon"></ion-icon>\n\n          </button>\n\n     </ion-buttons>\n\n\n\n    <ion-title>\n\n        <ion-segment [(ngModel)]="tabs">\n\n        \n\n          <ion-segment-button value="muban">\n\n            模板\n\n          </ion-segment-button>\n\n          <ion-segment-button value="juese">\n\n            角色\n\n          </ion-segment-button>\n\n      \n\n        </ion-segment>\n\n \n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n        <button ion-button >\n\n          <ion-icon name="add" class="settingsIcon"></ion-icon>\n\n        </button>\n\n   </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div [ngSwitch]="tabs">\n\n\n\n        <div class="tabs1" *ngSwitchCase="\'muban\'">\n\n          <div class="muban_top">\n\n              <ion-searchbar ></ion-searchbar>\n\n                <!-- <div class="searchbar">\n\n                    <ion-item>  \n\n                      <ion-label ><ion-icon name="search" color="danger"></ion-icon></ion-label>\n\n                      <ion-input type="search" ></ion-input>\n\n                  </ion-item>\n\n                </div> -->\n\n              <div class="twobtn">\n\n\n\n                  <div class="more" (tap)="changeisfenlei()">\n\n                        <p>分类\n\n                        <ion-icon name="arrow-down" *ngIf="isfenlei" class="selectIcon"></ion-icon>\n\n                        <ion-icon name="arrow-up" *ngIf="!isfenlei" ></ion-icon>\n\n                      </p>\n\n                    </div>\n\n                  <div class="more" (tap)="changeislaiyuan()">\n\n                      <p>来源\n\n                        <ion-icon name="arrow-down" *ngIf="islaiyuan"  class="selectIcon"></ion-icon>\n\n                        <ion-icon name="arrow-up" *ngIf="!islaiyuan"></ion-icon>\n\n                      </p>\n\n                    </div>\n\n\n\n              </div>\n\n          </div>\n\n          <div class="muban_mid1" *ngIf="isfenlei">\n\n              <div class="all">\n\n                  <div class="z1" (tap)="changeAdd()"> \n\n                    <ion-icon name="add-circle-outline" *ngIf="isadd" ></ion-icon>\n\n                    <ion-icon name="remove-circle-outline" *ngIf="!isadd" ></ion-icon>\n\n                  </div>\n\n                  <div class="z2"><p>全部</p></div>\n\n                  <div class="z3"><ion-icon name="open"></ion-icon></div>\n\n                  <div class="z4"><ion-icon name="more"></ion-icon></div>\n\n              </div>\n\n              \n\n          </div>\n\n          <div class="muban_mid2" *ngIf="islaiyuan">\n\n        \n\n              <ion-chip  style="width:50px;text-align:center;color: #111;background: rgb(216, 212, 212);" class="chipleft ml" (click)="changecolor1()" >\n\n                  <ion-label>所有</ion-label>\n\n                </ion-chip>\n\n              <ion-chip color="danhuise" style="width:50px;text-align:center" class="ml" (click)="changecolor2()">\n\n                  <ion-label>系统</ion-label>\n\n                </ion-chip>\n\n              <ion-chip color="danhuise"  style="width:50px;text-align:center" class="ml">\n\n                  <ion-label>原创</ion-label>\n\n                </ion-chip>\n\n              <ion-chip color="danhuise"  style="width:50px;text-align:center" class="ml">\n\n                  <ion-label>事项</ion-label>\n\n                </ion-chip>\n\n              <ion-chip color="danhuise"  style="width:50px;text-align:center" class="ml">\n\n                  <ion-label>复制</ion-label>\n\n                </ion-chip>\n\n        \n\n          </div>\n\n          <div class="muban_btm">\n\n            <ion-card class="card"><p>暂无模板，点击右上角新建模板吧~</p></ion-card>\n\n          </div>\n\n        </div>\n\n        <div class="tabs2" *ngSwitchCase="\'juese\'">\n\n          <div class="muban_top">\n\n              <div class="more2" (tap)="changeisfenlei()">\n\n                  <p>分类\n\n                  <ion-icon name="arrow-down" *ngIf="isfenlei" class="selectIcon"></ion-icon>\n\n                  <ion-icon name="arrow-up" *ngIf="!isfenlei" ></ion-icon>\n\n                </p>\n\n              </div>\n\n          </div>\n\n          <div class="muban_mid1" *ngIf="isfenlei">\n\n              <div class="all">\n\n                  <div class="z1" (tap)="changeAdd()"> \n\n                    <ion-icon name="add-circle-outline" *ngIf="isadd" ></ion-icon>\n\n                    <ion-icon name="remove-circle-outline" *ngIf="!isadd" ></ion-icon>\n\n                  </div>\n\n                  <div class="z2"><p>全部</p></div>\n\n                  <div class="z3"><ion-icon name="open"></ion-icon></div>\n\n                  <div class="z4"><ion-icon name="more"></ion-icon></div>\n\n              </div>\n\n              \n\n          </div>\n\n          \n\n      </div>\n\n      \n\n     </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\muban\muban.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */]])
    ], MubanPage);
    return MubanPage;
}());

//# sourceMappingURL=muban.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/appstart/appstart.module": [
		424,
		14
	],
	"../pages/daifa/daifa.module": [
		425,
		13
	],
	"../pages/lianxiren/lianxiren.module": [
		426,
		12
	],
	"../pages/login/login.module": [
		427,
		11
	],
	"../pages/muban/muban.module": [
		428,
		10
	],
	"../pages/personal/personal.module": [
		429,
		9
	],
	"../pages/register/register.module": [
		430,
		7
	],
	"../pages/register2/register2.module": [
		431,
		8
	],
	"../pages/registerpassword/registerpassword.module": [
		432,
		6
	],
	"../pages/registersign/registersign.module": [
		433,
		5
	],
	"../pages/scan/scan.module": [
		434,
		4
	],
	"../pages/settings-list/settings-list.module": [
		435,
		3
	],
	"../pages/settings/settings.module": [
		436,
		2
	],
	"../pages/shixiang/shixiang.module": [
		437,
		1
	],
	"../pages/tixing/tixing.module": [
		438,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 172;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConfigProvider = /** @class */ (function () {
    function ConfigProvider() {
        // 公共请求数据地址前缀
        this.apiUrl = "http://jd.itying.com/";
        console.log('Hello ConfigProvider Provider');
    }
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpServicesProvider = /** @class */ (function () {
    function HttpServicesProvider(http, jsonp, Config) {
        this.http = http;
        this.jsonp = jsonp;
        this.Config = Config;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        console.log('Hello HttpServicesProvider Provider');
    }
    // 下面是封装的公共请求数据方法
    // apiUrl：api/focus   用&拼接callback
    // apiUrl：api/plist?page=1   用?拼接callback
    HttpServicesProvider.prototype.ruquestData = function (apiUrl, callback) {
        //                      ↓ ==-1表示不存在问号
        if (apiUrl.indexOf('?') == -1) {
            var api = this.Config.apiUrl + apiUrl + '?callback=JSONP_CALLBACK'; /*  没有问号 */
        }
        else {
            var api = this.Config.apiUrl + apiUrl + '&callback=JSONP_CALLBACK'; /*   有问号  */
            // http://39.108.159.135/  +  paid/plist?is_best=1  +  &callback=JSONP_CALLBACK
        }
        //              ↓ api是config的地址前缀+上apiUrl传过来的参数+上是否回调
        this.jsonp.get(api).subscribe(function (data) {
            // console.log(data);
            callback(data['_body']); /*回调函数*/
        }, function (err) {
            console.log(err);
        });
    };
    // 封装post提交数据的方法
    HttpServicesProvider.prototype.doPost = function (apiUrl, json, callback) {
        var api = this.Config.apiUrl + apiUrl;
        this.http.post(api, JSON.stringify(json), { headers: this.headers })
            .subscribe(function (res) {
            callback(res.json());
        });
    };
    HttpServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], HttpServicesProvider);
    return HttpServicesProvider;
}());

//# sourceMappingURL=http-services.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(http) {
        this.http = http;
        console.log('Hello StorageProvider Provider');
    }
    // 储存内容到storage
    StorageProvider.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value)); /* 对象转换成字符串 */
    };
    // 获取storage的内容
    StorageProvider.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key)); /* 字符串转换成对象 */
    };
    // 删除storage的内容
    StorageProvider.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Register2Page = /** @class */ (function () {
    function Register2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Register2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    Register2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register2',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\register2\register2.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>注册界面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <body class="no-padding reader-black-font" lang="zh-CN">\n    <div class="sign">\n      <div class="logo"><a href="/"><img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"\n            alt="Logo"></a></div>\n      <div class="main">\n\n\n\n        <h4 class="title">\n          <div class="normal-title">\n            <a class="" href="/sign_in">登录</a>\n            <b>·</b>\n            <a id="js-sign-up-btn" class="active" href="/sign_up">注册</a>\n          </div>\n        </h4>\n        <div class="js-sign-up-container">\n          <form class="new_user" id="new_user" action="/users/register" accept-charset="UTF-8" method="post"><input\n              name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="1ClWj94TToX5o/orEHlRGhliyXHoFv0Km7lPncTFL8QJ/xUJt8PxICyZoAAmmu2iFrrELZHbJsJOxo4lOaVzXA==">\n            <div class="input-prepend restyle">\n              <input placeholder="你的昵称" type="text" value="" name="user[nickname]" id="user_nickname">\n              <i class="iconfont ic-user"></i>\n            </div>\n            <div class="input-prepend restyle no-radius js-normal">\n              <input type="hidden" value="CN" name="user[mobile_number_country_code]" id="user_mobile_number_country_code">\n              <input placeholder="手机号" type="tel" name="user[mobile_number]" id="user_mobile_number">\n              <i class="iconfont ic-phonenumber"></i>\n            </div>\n            <input type="hidden" name="oversea" id="oversea" value="false">\n            <input type="hidden" name="force_user_nonexist" id="force_user_nonexist" value="true">\n            <div class="input-prepend restyle no-radius security-up-code js-security-number hide">\n              <input type="text" name="sms_code" id="sms_code" placeholder="手机验证码">\n              <i class="iconfont ic-verify"></i>\n              <a tabindex="-1" class="btn-up-resend js-send-code-button disable" href="javascript:void(0);" id="send_code">发送验证码</a>\n              <div>\n                <div class="captcha"><input name="captcha[validation][challenge]" autocomplete="off" type="hidden"\n                    value="3b326436b36e6a767ef8fd9c95d29d3f"> <input name="captcha[validation][gt]" autocomplete="off"\n                    type="hidden" value="ec47641997d5292180681a247db3c92e"> <input name="captcha[validation][validate]"\n                    autocomplete="off" type="hidden" value=""> <input name="captcha[validation][seccode]" autocomplete="off"\n                    type="hidden" value=""> <input name="captcha[id]" autocomplete="off" type="hidden" value="">\n                  <div id="geetest-area" class="geetest"></div>\n                </div>\n              </div>\n            </div>\n            <input type="hidden" name="security_number" id="security_number">\n            <div class="input-prepend">\n              <input placeholder="设置密码" type="password" name="user[password]" id="user_password">\n              <i class="iconfont ic-password"></i>\n            </div>\n            <input type="submit" name="commit" value="注册" class="sign-up-button" id="sign_up_btn" data-disable-with="注册">\n            <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br> <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>\n              和 <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。</p>\n          </form>\n          <!-- 更多注册方式 -->\n          <div class="more-sign">\n            <h6>社交帐号直接注册</h6>\n            <ul>\n              <li><a id="weixin" class="weixin" target="_blank" href="/users/auth/wechat"><i class="iconfont ic-wechat"></i></a></li>\n              <li><a id="qq" class="qq" target="_blank" href="/users/auth/qq_connect"><i class="iconfont ic-qq_connect"></i></a></li>\n            </ul>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- Javascripts\n        ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n    <script type="application/json" data-name="page-data">\n      {\n        "user_signed_in": false,\n        "locale": "zh-CN",\n        "os": "windows",\n        "read_mode": "day",\n        "read_font": "font2"\n      }\n\n    </script>\n\n    <script src="//cdn2.jianshu.io/assets/web-base-059fad59acbd6e000110.js" crossorigin="anonymous"></script>\n    <script src="//cdn2.jianshu.io/assets/web-a844dd0ee5f24ad4d2bc.js" crossorigin="anonymous"></script>\n    <script src="//cdn2.jianshu.io/assets/web/pages/common/signup/entry-5d55473c92d21e013cde.js" crossorigin="anonymous"></script>\n    <script>\n      (function () {\n        var bp = document.createElement(\'script\');\n        var curProtocol = window.location.protocol.split(\':\')[0];\n        if (curProtocol === \'https\') {\n          bp.src = \'https://zz.bdstatic.com/linksubmit/push.js\';\n        } else {\n          bp.src = \'http://push.zhanzhang.baidu.com/push.js\';\n        }\n        var s = document.getElementsByTagName("script")[0];\n        s.parentNode.insertBefore(bp, s);\n      })();\n\n    </script>\n\n\n\n    <div style="position: static; width: 0px; height: 0px; border: none; padding: 0px; margin: 0px;">\n      <div id="trans-tooltip">\n        <div id="tip-left-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-left-top.png&quot;);"></div>\n        <div id="tip-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-top.png&quot;) repeat-x;"></div>\n        <div id="tip-right-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-right-top.png&quot;);"></div>\n        <div id="tip-right" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-right.png&quot;) repeat-y;"></div>\n        <div id="tip-right-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-right-bottom.png&quot;);"></div>\n        <div id="tip-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-bottom.png&quot;) repeat-x;"></div>\n        <div id="tip-left-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-left-bottom.png&quot;);"></div>\n        <div id="tip-left" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-left.png&quot;);"></div>\n        <div id="trans-content"></div>\n      </div>\n      <div id="tip-arrow-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-arrow-bottom.png&quot;);"></div>\n      <div id="tip-arrow-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-arrow-top.png&quot;);"></div>\n    </div>\n    <div class="geetest_panel geetest_wind" style="display: none;">\n      <div class="geetest_panel_ghost"></div>\n      <div class="geetest_panel_box">\n        <div class="geetest_other_offline geetest_panel_offline"></div>\n        <div class="geetest_panel_loading">\n          <div class="geetest_panel_loading_icon"></div>\n          <div class="geetest_panel_loading_content">智能验证检测中</div>\n        </div>\n        <div class="geetest_panel_success">\n          <div class="geetest_panel_success_box">\n            <div class="geetest_panel_success_show">\n              <div class="geetest_panel_success_pie"></div>\n              <div class="geetest_panel_success_filter"></div>\n              <div class="geetest_panel_success_mask"></div>\n            </div>\n            <div class="geetest_panel_success_correct">\n              <div class="geetest_panel_success_icon"></div>\n            </div>\n          </div>\n          <div class="geetest_panel_success_title">通过验证</div>\n        </div>\n        <div class="geetest_panel_error">\n          <div class="geetest_panel_error_icon"></div>\n          <div class="geetest_panel_error_title">网络超时</div>\n          <div class="geetest_panel_error_content">请点击此处重试</div>\n          <div class="geetest_panel_error_code"></div>\n        </div>\n        <div class="geetest_panel_footer" style="display: none;">\n          <div class="geetest_panel_footer_logo"></div>\n          <div class="geetest_panel_footer_copyright">由极验提供技术支持</div>\n        </div>\n        <div class="geetest_panel_next"></div>\n      </div>\n    </div>\n  </body>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\register2\register2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Register2Page);
    return Register2Page;
}());

//# sourceMappingURL=register2.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_scan_scan__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_qr_scanner__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_appstart_appstart__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_settings_list_settings_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_personal_personal__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registersign_registersign__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tixing_tixing__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shixiang_shixiang__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_muban_muban__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lianxiren_lianxiren__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_daifa_daifa__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register2_register2__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_registerpassword_registerpassword__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_config_config__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_storage_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_http_services_http_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_calendar_calendar_module__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// 自定义页面


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_21__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                // 自定义页面
                __WEBPACK_IMPORTED_MODULE_12__pages_daifa_daifa__["a" /* DaifaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lianxiren_lianxiren__["a" /* LianxirenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_muban_muban__["a" /* MubanPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_shixiang_shixiang__["a" /* ShixiangPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tixing_tixing__["a" /* TixingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register2_register2__["a" /* Register2Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_personal_personal__["a" /* PersonalPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_registersign_registersign__["a" /* RegistersignPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_registerpassword_registerpassword__["a" /* RegisterpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_settings_list_settings_list__["a" /* SettingsListPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_appstart_appstart__["a" /* AppstartPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_scan_scan__["a" /* ScanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_27__pages_calendar_calendar_module__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_23_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/appstart/appstart.module#AppstartPageModule', name: 'AppstartPage', segment: 'appstart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/daifa/daifa.module#DaifaPageModule', name: 'DaifaPage', segment: 'daifa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lianxiren/lianxiren.module#LianxirenPageModule', name: 'LianxirenPage', segment: 'lianxiren', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/muban/muban.module#MubanPageModule', name: 'MubanPage', segment: 'muban', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register2/register2.module#Register2PageModule', name: 'Register2Page', segment: 'register2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registerpassword/registerpassword.module#RegisterpasswordPageModule', name: 'RegisterpasswordPage', segment: 'registerpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registersign/registersign.module#RegistersignPageModule', name: 'RegistersignPage', segment: 'registersign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings-list/settings-list.module#SettingsListPageModule', name: 'SettingsListPage', segment: 'settings-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shixiang/shixiang.module#ShixiangPageModule', name: 'ShixiangPage', segment: 'shixiang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tixing/tixing.module#TixingPageModule', name: 'TixingPage', segment: 'tixing', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_23_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs__["a" /* TabsPage */],
                // 自定义页面
                __WEBPACK_IMPORTED_MODULE_12__pages_daifa_daifa__["a" /* DaifaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lianxiren_lianxiren__["a" /* LianxirenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_muban_muban__["a" /* MubanPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_shixiang_shixiang__["a" /* ShixiangPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tixing_tixing__["a" /* TixingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register2_register2__["a" /* Register2Page */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_registersign_registersign__["a" /* RegistersignPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_personal_personal__["a" /* PersonalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_registerpassword_registerpassword__["a" /* RegisterpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_settings_list_settings_list__["a" /* SettingsListPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_appstart_appstart__["a" /* AppstartPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_scan_scan__["a" /* ScanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_http_services_http_services__["a" /* HttpServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_qr_scanner__["a" /* QRScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_21__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_23_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 174,
	"./af.js": 174,
	"./ar": 175,
	"./ar-dz": 176,
	"./ar-dz.js": 176,
	"./ar-kw": 177,
	"./ar-kw.js": 177,
	"./ar-ly": 178,
	"./ar-ly.js": 178,
	"./ar-ma": 179,
	"./ar-ma.js": 179,
	"./ar-sa": 180,
	"./ar-sa.js": 180,
	"./ar-tn": 181,
	"./ar-tn.js": 181,
	"./ar.js": 175,
	"./az": 182,
	"./az.js": 182,
	"./be": 183,
	"./be.js": 183,
	"./bg": 184,
	"./bg.js": 184,
	"./bm": 185,
	"./bm.js": 185,
	"./bn": 186,
	"./bn.js": 186,
	"./bo": 187,
	"./bo.js": 187,
	"./br": 188,
	"./br.js": 188,
	"./bs": 189,
	"./bs.js": 189,
	"./ca": 190,
	"./ca.js": 190,
	"./cs": 191,
	"./cs.js": 191,
	"./cv": 192,
	"./cv.js": 192,
	"./cy": 193,
	"./cy.js": 193,
	"./da": 194,
	"./da.js": 194,
	"./de": 195,
	"./de-at": 196,
	"./de-at.js": 196,
	"./de-ch": 197,
	"./de-ch.js": 197,
	"./de.js": 195,
	"./dv": 198,
	"./dv.js": 198,
	"./el": 199,
	"./el.js": 199,
	"./en-SG": 200,
	"./en-SG.js": 200,
	"./en-au": 201,
	"./en-au.js": 201,
	"./en-ca": 202,
	"./en-ca.js": 202,
	"./en-gb": 203,
	"./en-gb.js": 203,
	"./en-ie": 204,
	"./en-ie.js": 204,
	"./en-il": 205,
	"./en-il.js": 205,
	"./en-nz": 206,
	"./en-nz.js": 206,
	"./eo": 207,
	"./eo.js": 207,
	"./es": 208,
	"./es-do": 209,
	"./es-do.js": 209,
	"./es-us": 210,
	"./es-us.js": 210,
	"./es.js": 208,
	"./et": 211,
	"./et.js": 211,
	"./eu": 212,
	"./eu.js": 212,
	"./fa": 213,
	"./fa.js": 213,
	"./fi": 214,
	"./fi.js": 214,
	"./fo": 215,
	"./fo.js": 215,
	"./fr": 216,
	"./fr-ca": 217,
	"./fr-ca.js": 217,
	"./fr-ch": 218,
	"./fr-ch.js": 218,
	"./fr.js": 216,
	"./fy": 219,
	"./fy.js": 219,
	"./ga": 220,
	"./ga.js": 220,
	"./gd": 221,
	"./gd.js": 221,
	"./gl": 222,
	"./gl.js": 222,
	"./gom-latn": 223,
	"./gom-latn.js": 223,
	"./gu": 224,
	"./gu.js": 224,
	"./he": 225,
	"./he.js": 225,
	"./hi": 226,
	"./hi.js": 226,
	"./hr": 227,
	"./hr.js": 227,
	"./hu": 228,
	"./hu.js": 228,
	"./hy-am": 229,
	"./hy-am.js": 229,
	"./id": 230,
	"./id.js": 230,
	"./is": 231,
	"./is.js": 231,
	"./it": 232,
	"./it-ch": 233,
	"./it-ch.js": 233,
	"./it.js": 232,
	"./ja": 234,
	"./ja.js": 234,
	"./jv": 235,
	"./jv.js": 235,
	"./ka": 236,
	"./ka.js": 236,
	"./kk": 237,
	"./kk.js": 237,
	"./km": 238,
	"./km.js": 238,
	"./kn": 239,
	"./kn.js": 239,
	"./ko": 240,
	"./ko.js": 240,
	"./ku": 241,
	"./ku.js": 241,
	"./ky": 242,
	"./ky.js": 242,
	"./lb": 243,
	"./lb.js": 243,
	"./lo": 244,
	"./lo.js": 244,
	"./lt": 245,
	"./lt.js": 245,
	"./lv": 246,
	"./lv.js": 246,
	"./me": 247,
	"./me.js": 247,
	"./mi": 248,
	"./mi.js": 248,
	"./mk": 249,
	"./mk.js": 249,
	"./ml": 250,
	"./ml.js": 250,
	"./mn": 251,
	"./mn.js": 251,
	"./mr": 252,
	"./mr.js": 252,
	"./ms": 253,
	"./ms-my": 254,
	"./ms-my.js": 254,
	"./ms.js": 253,
	"./mt": 255,
	"./mt.js": 255,
	"./my": 256,
	"./my.js": 256,
	"./nb": 257,
	"./nb.js": 257,
	"./ne": 258,
	"./ne.js": 258,
	"./nl": 259,
	"./nl-be": 260,
	"./nl-be.js": 260,
	"./nl.js": 259,
	"./nn": 261,
	"./nn.js": 261,
	"./pa-in": 262,
	"./pa-in.js": 262,
	"./pl": 263,
	"./pl.js": 263,
	"./pt": 264,
	"./pt-br": 265,
	"./pt-br.js": 265,
	"./pt.js": 264,
	"./ro": 266,
	"./ro.js": 266,
	"./ru": 267,
	"./ru.js": 267,
	"./sd": 268,
	"./sd.js": 268,
	"./se": 269,
	"./se.js": 269,
	"./si": 270,
	"./si.js": 270,
	"./sk": 271,
	"./sk.js": 271,
	"./sl": 272,
	"./sl.js": 272,
	"./sq": 273,
	"./sq.js": 273,
	"./sr": 274,
	"./sr-cyrl": 275,
	"./sr-cyrl.js": 275,
	"./sr.js": 274,
	"./ss": 276,
	"./ss.js": 276,
	"./sv": 277,
	"./sv.js": 277,
	"./sw": 278,
	"./sw.js": 278,
	"./ta": 279,
	"./ta.js": 279,
	"./te": 280,
	"./te.js": 280,
	"./tet": 281,
	"./tet.js": 281,
	"./tg": 282,
	"./tg.js": 282,
	"./th": 283,
	"./th.js": 283,
	"./tl-ph": 284,
	"./tl-ph.js": 284,
	"./tlh": 285,
	"./tlh.js": 285,
	"./tr": 286,
	"./tr.js": 286,
	"./tzl": 287,
	"./tzl.js": 287,
	"./tzm": 288,
	"./tzm-latn": 289,
	"./tzm-latn.js": 289,
	"./tzm.js": 288,
	"./ug-cn": 290,
	"./ug-cn.js": 290,
	"./uk": 291,
	"./uk.js": 291,
	"./ur": 292,
	"./ur.js": 292,
	"./uz": 293,
	"./uz-latn": 294,
	"./uz-latn.js": 294,
	"./uz.js": 293,
	"./vi": 295,
	"./vi.js": 295,
	"./x-pseudo": 296,
	"./x-pseudo.js": 296,
	"./yo": 297,
	"./yo.js": 297,
	"./zh-cn": 298,
	"./zh-cn.js": 298,
	"./zh-hk": 299,
	"./zh-hk.js": 299,
	"./zh-tw": 300,
	"./zh-tw.js": 300
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 400;

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_appstart_appstart__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.logined = false; /*  开关启动图 */
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        if (this.logined == true) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_appstart_appstart__["a" /* AppstartPage */];
        }
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_month_calendar_month__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_day_calendar_day__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lock_slides_directive__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_controller__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__calendar__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__calendar_month_calendar_month__["a" /* CalendarMonthComponent */],
                __WEBPACK_IMPORTED_MODULE_4__calendar_day_calendar_day__["a" /* CalendarDayComponent */],
                __WEBPACK_IMPORTED_MODULE_5__lock_slides_directive__["a" /* LockSlidesDirective */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__calendar_controller__["a" /* CalendarController */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__calendar__["a" /* CalendarComponent */]]
        })
    ], CalendarModule);
    return CalendarModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_controller__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calendarCtrl) {
        this.calendarCtrl = calendarCtrl;
        this.isshowUnder = false; /* 按钮切换 */
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onTap = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.schedules = [];
        this.maxDate = __WEBPACK_IMPORTED_MODULE_1_moment___default()()
            .add(10, 'y')
            .format('YYYY');
        this._startWeekDay = 'Monday';
        // 是否已经初始化
        this.isInit = true;
        // 是否已经初始化
        this.haveInit = false;
        // 是否选择
        this.isSelect = false;
        this.selectDay = 1;
        this.dates = [];
        this._onChanged = function () { };
    }
    CalendarComponent_1 = CalendarComponent;
    CalendarComponent.prototype.showTop = function () {
        console.log("显示/隐藏上面成功");
        this.isshowUnder = !this.isshowUnder;
        console.log("isshowUnder" + this.isshowUnder);
    };
    Object.defineProperty(CalendarComponent.prototype, "activeIndex", {
        get: function () {
            return this.slides ? this.slides.getActiveIndex() : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "startWeekDay", {
        get: function () {
            return this._startWeekDay;
        },
        // 一周的开始时间、星期天或星期一
        set: function (val) {
            if (val && this.startWeekDay !== val) {
                this._startWeekDay = val;
                this.initDate(__WEBPACK_IMPORTED_MODULE_1_moment___default()(this.currentDate));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (val) {
            if (val !== this._currentDate) {
                this._onChanged(val);
                this.onChange.emit(val);
            }
            else {
                this.onTap.emit(val);
            }
            this._currentDate = val;
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        this.initDate(__WEBPACK_IMPORTED_MODULE_1_moment___default()());
        this.calendarCtrl.setCalendar(this);
    };
    CalendarComponent.prototype.initDate = function (date) {
        var _this = this;
        var m = __WEBPACK_IMPORTED_MODULE_1_moment___default()(date);
        // 当前月份index (0~11)
        var month = m.month();
        var lastMonth = __WEBPACK_IMPORTED_MODULE_1_moment___default()().set({
            year: m.year(),
            month: month - 1,
            date: 1
        });
        var nextMonth = __WEBPACK_IMPORTED_MODULE_1_moment___default()().set({
            year: m.year(),
            month: month + 1,
            date: 1
        });
        var dates = [
            // 上一月
            lastMonth,
            // 当前月
            m,
            // 下一月
            nextMonth
        ];
        this.dates = dates;
        // 获取当前日期
        var currentDate = m.format('YYYY-MM-DD');
        this.currentDate = currentDate;
        // 判断是否初始化
        if (!this.haveInit) {
            this.haveInit = true;
            setTimeout(function () {
                _this._onChanged(_this.currentDate);
            }, 0);
        }
    };
    CalendarComponent.prototype.openDateTime = function () {
        this.dateTime.open();
    };
    CalendarComponent.prototype.selectDate = function (dateTime) {
        var _a = dateTime.getValue(), year = _a.year, month = _a.month, day = _a.day;
        var date = __WEBPACK_IMPORTED_MODULE_1_moment___default()({ year: year, month: month - 1, day: day }).format('YYYY-MM-DD');
        if (date !== this.currentDate) {
            this.update(date);
        }
    };
    CalendarComponent.prototype.willChange = function () {
        // 防止初始化时候发起事件
        if (!this.isInit) {
            // 先锁住手势滑动slide
            this.slides.onlyExternal = true;
            this.slides.shortSwipes = false;
        }
    };
    CalendarComponent.prototype.trackByFn = function (index, date) {
        return date.format('YYYY-MM');
    };
    // page ： -1 或者 1 后退、前进
    CalendarComponent.prototype.changePage = function (page) {
        // 防止初始化时候发起事件
        if (this.isInit) {
            this.isInit = false;
            return;
        }
        // 锁住手势滑动slide
        this.slides.onlyExternal = true;
        this.slides.shortSwipes = false;
        // 复制当前日历数据
        var dates = [];
        for (var _i = 0, _a = this.dates; _i < _a.length; _i++) {
            var m = _a[_i];
            dates.push(__WEBPACK_IMPORTED_MODULE_1_moment___default()(m));
        }
        this.dates = [];
        this.slides.update();
        for (var i = 0; i < dates.length; i++) {
            var month = dates[i].month() + page;
            var day = this.isSelect && i === 1 ? this.selectDay : 1;
            dates[i].set({ month: month, date: day });
        }
        this.dates = dates;
        this.slides.update(200);
        this.currentDate = this.dates[1].format('YYYY-MM-DD');
        this.isSelect = false;
        this.slides.slideTo(1, 0, false);
        // 不能小于1970-01-01
        if (__WEBPACK_IMPORTED_MODULE_1_moment___default()('1970-01-01').isAfter(this.currentDate)) {
            this.initDate(__WEBPACK_IMPORTED_MODULE_1_moment___default()('1970-01-01'));
        }
    };
    CalendarComponent.prototype.select = function (date) {
        var currentDate = __WEBPACK_IMPORTED_MODULE_1_moment___default()(this.currentDate);
        // 不是当前月
        if (!currentDate.isSame(date, 'month')) {
            var day = __WEBPACK_IMPORTED_MODULE_1_moment___default()(date).date();
            this.isSelect = true;
            this.selectDay = day;
            // 选择上个月或下一月
            if (currentDate.isAfter(date)) {
                this.dates[0].set({ date: this.selectDay });
                this.slides.slidePrev(300);
            }
            else {
                this.dates[2].set({ date: this.selectDay });
                this.slides.slideNext(300);
            }
        }
        else {
            this.currentDate = date;
        }
    };
    CalendarComponent.prototype.update = function (val) {
        var valid = __WEBPACK_IMPORTED_MODULE_1_moment___default()(val).format('YYYY-MM-DD') !== 'Invalid date';
        var same = __WEBPACK_IMPORTED_MODULE_1_moment___default()(val).format('YYYY-MM-DD') === this.currentDate;
        // 不能小于1970-01-01
        var min = __WEBPACK_IMPORTED_MODULE_1_moment___default()(val).isBefore('1970-01-01');
        if (valid && !same && !min) {
            this.slides.lockSwipes(true);
            // 判断月份是否一致
            var sameMonth = __WEBPACK_IMPORTED_MODULE_1_moment___default()(val).isSame(this.currentDate, 'month');
            if (sameMonth) {
                this.dates[1].set('date', __WEBPACK_IMPORTED_MODULE_1_moment___default()(val).date());
                this.currentDate = this.dates[1].format('YYYY-MM-DD');
            }
            else {
                this.initDate(__WEBPACK_IMPORTED_MODULE_1_moment___default()(val));
            }
            this.slides.lockSwipes(false);
        }
    };
    CalendarComponent.prototype.writeValue = function (val) {
        if (val) {
            this.update(val);
        }
    };
    CalendarComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
    };
    CalendarComponent.prototype.registerOnTouched = function (fn) { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Slides */])
    ], CalendarComponent.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* DateTime */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* DateTime */])
    ], CalendarComponent.prototype, "dateTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "onTap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], CalendarComponent.prototype, "schedules", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CalendarComponent.prototype, "startWeekDay", null);
    CalendarComponent = CalendarComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'calendar',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\calendar\calendar.html"*/'<ul class="calendar-head" *ngIf="startWeekDay !== \'Sunday \'">\n  <li>日</li>\n  <li>一</li>\n  <li>二</li>\n  <li>三</li>\n  <li>四</li>\n  <li>五</li>\n  <li>六</li>\n</ul>\n<ul class="calendar-head" *ngIf="startWeekDay === \'Sunday\'">\n  <li>一</li>\n  <li>二</li>\n  <li>三</li>\n  <li>四</li>\n  <li>五</li>\n  <li>六</li>\n  <li>日</li>\n</ul>\n<div *ngIf="!!dates.length">\n  <ion-slides [lock-slides]="activeIndex" \n  (ionSlideWillChange)="willChange()"\n   [initialSlide]="1" (ionSlidePrevEnd)="changePage(-1)"\n    (ionSlideNextEnd)="changePage(1)">\n    <ion-slide *ngFor="let item of dates;trackBy: trackByFn">\n      <calendar-month [dateMonth]="item" [startWeekDay]="startWeekDay" (onSelect)="select($event)"></calendar-month>\n    </ion-slide>\n  </ion-slides>\n\n  <div class="upicon" (tap)="showTop()">\n    <ion-icon name="ios-arrow-down" *ngIf="!isshowUnder" ></ion-icon>\n    <ion-icon name="ios-arrow-up" *ngIf="isshowUnder" ></ion-icon>\n</div>  \n</div>\n\n<ion-datetime (ionBlur)="selectDate($event)" [max]="maxDate" doneText="确定" cancelText="取消" displayFormat="YYYY-MM-DD" min="1970"\n  style="display: none;" [ngModel]="currentDate"></ion-datetime>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\calendar\calendar.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return CalendarComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__calendar_controller__["a" /* CalendarController */]])
    ], CalendarComponent);
    return CalendarComponent;
    var CalendarComponent_1;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarMonthComponent = /** @class */ (function () {
    function CalendarMonthComponent() {
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.dates = [];
    }
    CalendarMonthComponent.prototype.ngOnInit = function () {
        this.initViews(this.dateMonth);
    };
    CalendarMonthComponent.prototype.ngOnDestroy = function () {
        this.dateMonth = null;
    };
    CalendarMonthComponent.prototype.trackByFn = function (index, date) {
        return date;
    };
    CalendarMonthComponent.prototype.changeDate = function (date) {
        this.onSelect.emit(date);
    };
    CalendarMonthComponent.prototype.initViews = function (date) {
        // 当前月
        var currentDate = __WEBPACK_IMPORTED_MODULE_1_moment___default()(date);
        // 月份下标（第几个月）
        var month = currentDate.month();
        // 上一个月
        var lastDate = __WEBPACK_IMPORTED_MODULE_1_moment___default()(date).set({ month: month - 1 });
        // 下个月
        var nextDate = __WEBPACK_IMPORTED_MODULE_1_moment___default()(date).set({ month: month + 1 });
        // 获取1号的星期下标
        var startWeek = this.startWeekDay === 'Sunday'
            ? currentDate.set({ date: 1 }).isoWeekday() - 1
            : currentDate.set({ date: 1 }).day();
        // 上个月的剩余天数
        for (var i = 0; i < startWeek; i++) {
            // 上一个月
            var date_1 = lastDate
                .set({ date: lastDate.daysInMonth() - i })
                .format('YYYY-MM-DD');
            this.dates.unshift(date_1);
        }
        // 这个月的天数
        var days = currentDate.daysInMonth();
        for (var i = 0; i < days; i++) {
            var date_2 = currentDate.set({ date: i + 1 }).format('YYYY-MM-DD');
            this.dates.push(date_2);
        }
        // 获取最后一天星期下标
        var endWeek = this.startWeekDay === 'Monday'
            ? currentDate.set({ date: days }).isoWeekday() - 1
            : currentDate.set({ date: days }).day();
        // 下个月的天数
        for (var i = 0; i < 6 - endWeek; i++) {
            var date_3 = nextDate.set({ date: i + 1 }).format('YYYY-MM-DD');
            this.dates.push(date_3);
        }
        // 没有够，6行7列
        if (this.dates.length < 42) {
            // 需要添加的天数
            var emptyDay = 42 - this.dates.length;
            // 当前最后一天日期字符串
            var end = this.dates[this.dates.length - 1];
            // 当前最后一天日期
            var endDate = __WEBPACK_IMPORTED_MODULE_1_moment___default()(end);
            // 当前月份的最后一天
            currentDate.set({ date: days });
            // 第35格是当前月的最后一天
            if (endDate.format('YYYY-MM-DD') === currentDate.format('YYYY-MM-DD')) {
                for (var i = 0; i < emptyDay; i++) {
                    var date_4 = nextDate.set({ date: i + 1 }).format('YYYY-MM-DD');
                    this.dates.push(date_4);
                }
            }
            else {
                // 取出最后一天的日期，累加
                var endDay = endDate.date();
                for (var i = 0; i < emptyDay; i++) {
                    var date_5 = endDate
                        .set({ date: endDay + i + 1 })
                        .format('YYYY-MM-DD');
                    this.dates.push(date_5);
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], CalendarMonthComponent.prototype, "onSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CalendarMonthComponent.prototype, "dateMonth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CalendarMonthComponent.prototype, "startWeekDay", void 0);
    CalendarMonthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'calendar-month',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\calendar\calendar-month\calendar-month.html"*/'<div class="calendar" *ngIf="!!dateMonth">\n  <calendar-day *ngFor="let date of dates;trackBy: trackByFn" [dateMonth]="dateMonth" [date]="date" (onSelect)="changeDate($event)"></calendar-day>\n</div>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\calendar\calendar-month\calendar-month.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CalendarMonthComponent);
    return CalendarMonthComponent;
}());

//# sourceMappingURL=calendar-month.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_controller__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarDayComponent = /** @class */ (function () {
    function CalendarDayComponent(calendarCtrl) {
        this.calendarCtrl = calendarCtrl;
        // 选择时间
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(CalendarDayComponent.prototype, "schedule", {
        // 当前日程对象
        get: function () {
            var _this = this;
            return this.calendarCtrl.schedules.find(function (val) { return val.date === _this.date; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarDayComponent.prototype, "haveSchedule", {
        // 有日程
        get: function () {
            return !!this.schedule;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarDayComponent.prototype, "isToday", {
        get: function () {
            return this.date === __WEBPACK_IMPORTED_MODULE_1_moment___default()().format('YYYY-MM-DD');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarDayComponent.prototype, "isCurrentMonth", {
        // 当前月份
        get: function () {
            return this.dateMonth.isSame(this.date, 'month');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarDayComponent.prototype, "isSelectDay", {
        // 当前选中日期
        get: function () {
            return (this.calendarCtrl.activeDate() === this.date &&
                this.calendarCtrl.activeDate() === this.dateMonth.format('YYYY-MM-DD'));
        },
        enumerable: true,
        configurable: true
    });
    CalendarDayComponent.prototype.select = function () {
        // 不能选择小于 1970-01-01
        if (__WEBPACK_IMPORTED_MODULE_1_moment___default()(this.date).isBefore('1970-01-01'))
            return;
        if (this.isCurrentMonth) {
            this.dateMonth.set('date', __WEBPACK_IMPORTED_MODULE_1_moment___default()(this.date).date());
        }
        this.onSelect.emit(this.date);
    };
    CalendarDayComponent.prototype.ngOnDestroy = function () {
        this.dateMonth = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CalendarDayComponent.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CalendarDayComponent.prototype, "dateMonth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], CalendarDayComponent.prototype, "onSelect", void 0);
    CalendarDayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'calendar-day',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\calendar\calendar-day\calendar-day.html"*/'<div class="calendar-day" [ngClass]="{\'isCurrentMonth\':isCurrentMonth,\'isSelectDay\':isSelectDay}" tappable (click)="select();$event.stopPropagation();">\n  <span [ngClass]="{\'isToday\':isToday}">{{date | date:\'d\'}}</span>\n  <b [hidden]="!haveSchedule" [ngStyle]="{\'background-color\':schedule?.color}"></b>\n</div>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\calendar\calendar-day\calendar-day.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__calendar_controller__["a" /* CalendarController */]])
    ], CalendarDayComponent);
    return CalendarDayComponent;
}());

//# sourceMappingURL=calendar-day.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockSlidesDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LockSlidesDirective = /** @class */ (function () {
    function LockSlidesDirective(slides) {
        this.slides = slides;
    }
    LockSlidesDirective.prototype.ngOnChanges = function () {
        if (this.enableSwipe === 1) {
            // 解锁手势滑动slide
            this.slides.onlyExternal = false;
            this.slides.shortSwipes = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('lock-slides'),
        __metadata("design:type", Number)
    ], LockSlidesDirective.prototype, "enableSwipe", void 0);
    LockSlidesDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ion-slides[lock-slides]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Self */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]])
    ], LockSlidesDirective);
    return LockSlidesDirective;
}());

//# sourceMappingURL=lock-slides.directive.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registersign_registersign__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, httpservices, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservices = httpservices;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.tel = '';
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.goRegistersignPage = function () {
        var _this = this;
        // this.navCtrl.push(RegistersignPage)
        console.log(this.tel);
        if (/^\d{11}$/.test(this.tel)) {
            var api = 'api/sendCode';
            this.httpservices.doPost(api, { "tel": this.tel }, function (result) {
                console.log(result); /* 测试 */
                console.log(result.code) /* 打印出验证码 */;
                _this.presentToast(result);
                _this.storage.set('reg_tel', _this.tel); /* 保存电话号码 */
                if (result.success) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registersign_registersign__["a" /* RegistersignPage */]);
                }
                else {
                    alert("发送失败 " + result.message);
                }
            });
        }
        else {
            alert("请输入正确的电话号码!");
        }
    };
    /* 弹出验证码 */
    RegisterPage.prototype.presentToast = function (result) {
        var toast = this.toastCtrl.create({
            message: result.code,
            duration: 3000
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<div class="register-page">\n  <input type="text" placeholder="请输入手机号" [(ngModel)]="tel" maxlength="11">\n</div>\n<button ion-button class="next-btn" (tap)="goRegistersignPage()" >下一步</button>\n\n\n<!-- <button ion-button [navPush]="CeshiPage">测试注册模板页面</button> -->\n\n<!-- <ion-item>\n  <ion-label >前面</ion-label>\n  <ion-input type="text"  placeholder="测试一下咯" clearInput></ion-input>\n</ion-item> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarController = /** @class */ (function () {
    function CalendarController() {
    }
    CalendarController.prototype.setCalendar = function (calendar) {
        this.calendar = calendar;
    };
    Object.defineProperty(CalendarController.prototype, "schedules", {
        get: function () {
            return this.calendar.schedules;
        },
        enumerable: true,
        configurable: true
    });
    // 当前选中时间
    CalendarController.prototype.activeDate = function () {
        return this.calendar.currentDate;
    };
    CalendarController.prototype.selectDate = function () {
        this.calendar.openDateTime();
    };
    CalendarController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CalendarController);
    return CalendarController;
}());

//# sourceMappingURL=calendar-controller.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_list_settings_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_http_services_http_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_personal__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.LoginPage = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.RegisterPage = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */];
        this.PersonalPage = __WEBPACK_IMPORTED_MODULE_2__personal_personal__["a" /* PersonalPage */];
        this.SettingsListPage = __WEBPACK_IMPORTED_MODULE_0__settings_list_settings_list__["a" /* SettingsListPage */];
        // public isLogin=false;
        this.userinfo = '';
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var userinfo = this.storage.get("userinfo");
        if (userinfo && userinfo.username) {
            this.userinfo = userinfo;
        }
        else {
            this.userinfo = '';
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\settings\settings.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>用户</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n  \n    <div *ngIf="!userinfo" >\n      \n          <ion-item [navPush]="LoginPage">\n              <ion-avatar item-start>\n                <img src="../../assets/imgs/xfn.png">\n              </ion-avatar>\n              <h2>用户名:{{userinfo.username}}</h2>\n              <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n          </ion-item>\n          <ion-item-divider></ion-item-divider>\n    </div>\n    \n    <ion-list *ngIf="userinfo" >\n      <ion-item [navPush]="PersonalPage">\n          <ion-avatar item-start>\n            <img src="../../assets/imgs/xfn.png">\n          </ion-avatar>\n          <h2>用户名:{{userinfo.username}}</h2>\n          <p>璀璨钻石</p>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n    </ion-list>\n  \n  \n    <ion-list inset >\n        <ion-item-divider></ion-item-divider>\n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="pricetags" item-start></ion-icon>\n              <span>特征管理</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n  \n        \n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="list" item-start></ion-icon>\n              <span>职业树管理</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n  \n        \n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="trending-down" item-start></ion-icon>\n              <span>自定义分类管理</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n\n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="time" item-start></ion-icon>\n              <span>时间管理</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n  \n  \n  \n        <ion-item-divider></ion-item-divider>\n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="notifications" item-start></ion-icon>\n              <span>消息设置</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n  \n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="refresh-circle" item-start></ion-icon>\n              <span>检查更新</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n\n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="trash" item-start></ion-icon>\n              <span>清除本地数据库</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n\n        <ion-item color="light" [navPush]="SettingsListPage">\n            <ion-icon name="headset" item-start></ion-icon>\n              <span>帮助反馈</span>\n            <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.userinfo = {
            username: '',
            password: '',
        };
        this.history = this.navParams.get("history");
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginQustion = function () {
        console.log('登录成功啦');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        // 1、获取this.userinfo的表单信息
        // console.log(this.userinfo);
        if (this.userinfo.username.length < 6) {
            alert("用户名不合法");
        }
        else {
            var api = 'api/doLogin';
            this.httpservices.doPost(api, this.userinfo, function (data) {
                console.log(data);
                if (data.success) {
                    // alert("登录成功")
                    _this.storage.set('userinfo', data.userinfo[0]);
                    if (_this.history == "order ") {
                        _this.navCtrl.pop();
                        // alert("登陆成功")   
                        // 返回到上一个页面
                    }
                    else {
                        _this.navCtrl.popToRoot(); /* 回到根页面 */
                        // alert("直接进入")  
                    }
                }
                else {
                    alert(data.message);
                }
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <ion-item>\n        <ion-label>\n        <ion-icon name="person" start color="primary"></ion-icon>\n        </ion-label>\n        <ion-input type="string" placeholder="用户名/手机号/邮箱" [(ngModel)]="userinfo.username"></ion-input>\n     </ion-item>\n    <ion-item>\n        <ion-label>\n        <ion-icon name="lock" start color="primary"></ion-icon>\n        </ion-label>\n        <ion-input type="password" placeholder="密码" [(ngModel)]="userinfo.password"></ion-input>\n     </ion-item>\n     \n     <ion-item no-lines class="list-end">\n        <span item-start [navPush]="RegisterPage">手机快速注册</span>\n        <span item-end class="forgrt">忘记密码?</span>\n     </ion-item>\n\n     <button ion-button  block class="login-btn1" (click)="doLogin()" >登录</button>\n<!-- <div class="wrap">\n\n     <div class="remember-btn">\n      <input type="checkbox" value="true" checked="checked" name="session[remember_me]" id="session_remember_me"><span>记住我</span>\n    </div>\n\n    <div class="forget-btn">\n      <a class="" data-toggle="dropdown" href="">登录遇到问题?</a>\n      \n    </div>\n    \n  </div>\n\n  <button ion-button round block>登录</button>\n\n  <div class="other-login">\n      <h6>社交帐号直接注册/登录</h6>\n      <ul>\n    <li><a id="weixin" class="weixin" target="_blank" href="/users/auth/wechat"><i class="iconfont ic-wechat"></i></a></li>\n    <li><a id="qq" class="qq" target="_blank" href="/users/auth/qq_connect"><i class="iconfont ic-qq_connect"></i></a></li>\n  </ul>\n  \n    </div> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tixing_tixing__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lianxiren_lianxiren__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shixiang_shixiang__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__daifa_daifa__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__muban_muban__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__muban_muban__["a" /* MubanPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__daifa_daifa__["a" /* DaifaPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__shixiang_shixiang__["a" /* ShixiangPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__lianxiren_lianxiren__["a" /* LianxirenPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_0__tixing_tixing__["a" /* TixingPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\13295\Desktop\dayday\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="0">\n\n  <ion-tab [root]="tab1Root" tabTitle="模板" tabIcon="cube"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="代发" tabIcon="send"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="事项" tabIcon="flame"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="联系人" tabIcon="people"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="提醒" tabIcon="notifications"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\13295\Desktop\dayday\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.js.map