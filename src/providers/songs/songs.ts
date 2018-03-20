import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SONG_LIST } from '../../mocks/songs/songs.mock';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the SongsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SongsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SongsProvider Provider');
  }

  getsongs(){
    //return this.http.get("https://ionic-songhop.herokuapp.com/recommendations")
    return this.http.get("http://10.16.0.120:8085/v1/songs")
    .map(response => response);
  }

}


