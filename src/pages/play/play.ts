import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Media, MediaObject } from '@ionic-native/media';
import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { Songs } from  '../../models/songs/songs.interface';


declare let Media : any;
/**
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage {
  cancion: Songs;
  media : any;
  showToggle : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  


  playsong(){
    this.showToggle = false;
    if (!this.media)
          this.loadsong(this.cancion.preview_url);
        this.media.play();
  }

  /*playsong() {
    this.showToggle = false;
      let options: StreamingAudioOptions = {
        successCallback: () => { console.log('Finished Audio') },
        errorCallback: (e) => { console.log('Error: ', e) },
        initFullscreen: false // iOS only!
      };
      this.media.play();
    }*/
  

  stopsong() {
    this.showToggle = true;
    this.media.stop();
  }

  pausesong() {
    this.showToggle = true;
    this.media.pause();
  }

  loadsong(url : string){
    this.media = new Media(url);
  }

  ionViewWillLoad(){
    this.cancion = this.navParams.get('song');
  }

  ionViewWillLeave(){
    this.stopsong();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayPage');
  }
  

}
