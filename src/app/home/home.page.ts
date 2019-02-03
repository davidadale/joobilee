import { Component } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	private songMedia: MediaObject;

	constructor(private mediaPlugin: Media){}
	
	playSong(){
	console.log("play song");
		this.songMedia = this.mediaPlugin.create( "https://s3.us-east-2.amazonaws.com/drpc/BillHouston/1985-08-25-Pentecost.flac" );
		this.songMedia.play();
	}

	pauseSong(){
	console.log("pause song");
		this.songMedia.pause();
	}

	stopSong(){
	console.log("stop song");
		this.songMedia.stop();
		this.songMedia.release();
	}



}
