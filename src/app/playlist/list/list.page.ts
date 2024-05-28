import { ISong } from './../../shared/models/ISong';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MusicService} from "../../shared/services/musica.service";
import { MockMusicService } from 'src/app/shared/services/musica-mock.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listSongs: ISong[] = [];

  constructor(private router: Router, private mockMusicService: MockMusicService, private musicService: MusicService) { }

  ngOnInit() {
    this.mockMusicService.getSongs().subscribe(songs => {
      this.listSongs = songs;
      this.musicService.setSongs(this.listSongs);
    });
  }

  openSong(index: number) {
    this.musicService.setCurrentSongIndex(index);
    this.router.navigate(['/player']);
  }
  backToPlaylist(){
    this.router.navigate(['playlist'])
  }
}
