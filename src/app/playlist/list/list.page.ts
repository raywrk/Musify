import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MusicService} from "../../shared/services/musica.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private router: Router, private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.setSongs(this.listSongs);
  }

  listSongs = [
    {id: 1, nome: 'sTraNgeRs', artist: 'Bring Me The Horizon', img: '../../../assets/playlist/bmth.png', music: 'https://srjptmjydqjdrlwrywch.supabase.co/storage/v1/object/public/datanexus/bmth-strangers.mp3'},
    {id: 2, nome: 'Faint', artist: 'Linkin Park', img: '../../../assets/playlist/linkin.png', music: 'https://srjptmjydqjdrlwrywch.supabase.co/storage/v1/object/public/datanexus/linkin-park-faint.mp3'},
    {id: 3, nome: 'Duality', artist: 'Slipknot', img: '../../../assets/playlist/slipknot.jfif', music: 'https://srjptmjydqjdrlwrywch.supabase.co/storage/v1/object/public/datanexus/slipknot-duality.mp3'},
    {id: 4, nome: 'sTraNgeRs', artist: 'Bring Me The Horizon', img: '../../../assets/playlist/bmth.png', music: 'https://srjptmjydqjdrlwrywch.supabase.co/storage/v1/object/public/datanexus/bmth-strangers.mp3'},
    {id: 5, nome: 'Faint', artist: 'Linkin Park', img: '../../../assets/playlist/linkin.png', music: 'https://srjptmjydqjdrlwrywch.supabase.co/storage/v1/object/public/datanexus/linkin-park-faint.mp3'},
    {id: 6, nome: 'Duality', artist: 'Slipknot', img: '../../../assets/playlist/slipknot.jfif', music: 'https://srjptmjydqjdrlwrywch.supabase.co/storage/v1/object/public/datanexus/slipknot-duality.mp3'},
    {id: 7, nome: 'sTraNgeRs', artist: 'Bring Me The Horizon', img: '../../../assets/playlist/bmth.png', music: 'https://srjptmjydqjdrlwrywch.supabase.co/storage/v1/object/public/datanexus/bmth-strangers.mp3'},
    {id: 8, nome: 'Faint', artist: 'Linkin Park', img: '../../../assets/playlist/linkin.png', music: 'https://srjptmjydqjdrlwrywch.supabase.co/storage/v1/object/public/datanexus/linkin-park-faint.mp3'},
    {id: 9, nome: 'Duality', artist: 'Slipknot', img: '../../../assets/playlist/slipknot.jfif', music: 'https://srjptmjydqjdrlwrywch.supabase.co/storage/v1/object/public/datanexus/slipknot-duality.mp3'},
  ]

  openSong(index: number) {
    this.musicService.setCurrentSongIndex(index);
    this.router.navigate(['/player']);
  }
  backToPlaylist(){
    this.router.navigate(['playlist'])
  }
}
