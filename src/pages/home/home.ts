import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SongsProvider } from '../../providers/songs/songs';
import { Songs } from  '../../models/songs/songs.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  songs: Songs[];
  constructor(public navCtrl: NavController, private SongsProvider: SongsProvider) {
    this.SongsProvider.getsongs().subscribe(
      (data: Songs[]) => {
        this.songs = data;
      }
    );
    
  }

}
