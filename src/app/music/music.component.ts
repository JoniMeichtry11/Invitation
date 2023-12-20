import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {
  isMusicPlaying: boolean = false;
  constructor(private _musicService: MusicService){
    this._musicService.isMusicPlaying$.subscribe({
      next: (isPlaying: boolean) => {
        this.isMusicPlaying = isPlaying;
      }
    })
  }
}
