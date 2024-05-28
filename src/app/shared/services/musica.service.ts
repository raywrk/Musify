import { HttpClient } from '@angular/common/http';
import { ISong } from './../models/ISong';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private readonly apiUrl = '../../../assets/mock-data/list-songs.json';

  private songsSource = new BehaviorSubject<any[]>([]);
  private currentSongIndexSource = new BehaviorSubject<number>(0);

  songs$ = this.songsSource.asObservable();
  currentSongIndex$ = this.currentSongIndexSource.asObservable();

  constructor(private http: HttpClient){}

  setSongs(songs: any[]) {
    this.songsSource.next(songs);
  }

  setCurrentSongIndex(index: number) {
    this.currentSongIndexSource.next(index);
  }

  nextSong() {
    const currentIndex = this.currentSongIndexSource.value;
    const songs = this.songsSource.value;
    if (currentIndex < songs.length - 1) {
      this.setCurrentSongIndex(currentIndex + 1);
    }
  }

  previousSong() {
    const currentIndex = this.currentSongIndexSource.value;
    if (currentIndex > 0) {
      this.setCurrentSongIndex(currentIndex - 1);
    }
  }

  getCurrentSong() {
    const currentIndex = this.currentSongIndexSource.value;
    const songs = this.songsSource.value;
    return songs[currentIndex];
  }

  getSongs(): Observable<ISong[]> {
    return this.http.get<ISong[]>(this.apiUrl);
  }
}
