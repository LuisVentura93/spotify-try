webpackJsonp([0],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPageModule", function() { return PlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayPageModule = /** @class */ (function () {
    function PlayPageModule() {
    }
    PlayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__play__["a" /* PlayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__play__["a" /* PlayPage */]),
            ],
        })
    ], PlayPageModule);
    return PlayPageModule;
}());

//# sourceMappingURL=play.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
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
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayPage = /** @class */ (function () {
    function PlayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showToggle = true;
    }
    PlayPage.prototype.playsong = function () {
        this.showToggle = false;
        if (!this.media)
            this.loadsong(this.cancion.preview_url);
        this.media.play();
    };
    /*playsong() {
      this.showToggle = false;
        let options: StreamingAudioOptions = {
          successCallback: () => { console.log('Finished Audio') },
          errorCallback: (e) => { console.log('Error: ', e) },
          initFullscreen: false // iOS only!
        };
        this.media.play();
      }*/
    PlayPage.prototype.stopsong = function () {
        this.showToggle = true;
        this.media.stop();
    };
    PlayPage.prototype.pausesong = function () {
        this.showToggle = true;
        this.media.pause();
    };
    PlayPage.prototype.loadsong = function (url) {
        this.media = new Media(url);
    };
    PlayPage.prototype.ionViewWillLoad = function () {
        this.cancion = this.navParams.get('song');
    };
    PlayPage.prototype.ionViewWillLeave = function () {
        this.stopsong();
    };
    PlayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayPage');
    };
    PlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-play',template:/*ion-inline-start:"C:\Users\lfventura\Documents\ionic\spotify_try\src\pages\play\play.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Play</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n              <img src="{{ cancion.image_medium }}"/>\n        <ion-card-content>\n          <ion-card-title>\n              {{ cancion.title }}\n            </ion-card-title>\n          <p>\n              {{ cancion.artist }}\n          </p>\n          <!--<button (click)="playsong();">\n              <ion-icon ios="ios-play" md="md-play"></ion-icon>\n          </button>-->\n          <div id="everything">\n          <button ion-fab icon-only (click)="playsong(); showToggleFun()" *ngIf="showToggle">\n            <ion-icon name="play"></ion-icon  >\n         </button>\n        <button ion-fab  (click)="pausesong(); showToggleFun()" *ngIf="!showToggle" color="danger">\n          <ion-icon name="pause"></ion-icon>\n        </button>\n      </div>\n\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lfventura\Documents\ionic\spotify_try\src\pages\play\play.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PlayPage);
    return PlayPage;
}());

//# sourceMappingURL=play.js.map

/***/ })

});
//# sourceMappingURL=0.js.map