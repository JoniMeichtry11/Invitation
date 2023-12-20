import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private isMusicPlayingSubject = new BehaviorSubject<boolean>(false);
  isMusicPlaying$ = this.isMusicPlayingSubject.asObservable();

  setMusicPlaying(isPlaying: boolean) {
    this.isMusicPlayingSubject.next(isPlaying);
  }
}
