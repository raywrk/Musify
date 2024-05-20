import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import {MusicService} from "../shared/services/musica.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  traducaoShowUS: boolean = true;
  traducaoShowBR: boolean = false;
  currentMusicName: string;
  currentArtistName: string;
  currentAlbumPhoto: string;
  currentTime: number = 0;
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  currentTime$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  duration$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  song = new Audio();
  max: number = 0;
  timeDuration: number = 0;

  constructor(private ngZone: NgZone, private router: Router, private musicService: MusicService) {}

  showTraducaoUS(){
    this.traducaoShowUS = true;
    this.traducaoShowBR = false;
  }
  showTraducaoBR(){
    this.traducaoShowUS = false;
    this.traducaoShowBR = true;
  }

  translateMusic = {
    "type": "exact",
    "art": {
      "id": "3ade68b6gac89fda3",
      "name": "Bring Me The Horizon",
      "url": "https:\/\/www.vagalume.com.br\/bring-me-the-horizon\/"
    },
    "mus": [
      {
        "id": "3ade68b8g7a0511b3",
        "name": "Strangers",
        "url": "https:\/\/www.vagalume.com.br\/bring-me-the-horizon\/strangers.html",
        "lang": 2,
        "text": "Maybe I'll just be fucked up forever\nShould have figured myself out by now\nAnd I don't want to tear myself open, no\nBut it's hard to care when you bleed out\n\nSo won't you break me down, break me down\nMake me get better\nI confess: I'm a mess, some kind of error\nWell maybe I was destined to disappear\n\nWe're just a room full of strangers\nLooking for something to save us\nAlone together, we're dying to live\nAnd we're living to die\nDying to live, living to die\nWe're just a room full of strangers\n\nWell I guess my guardian angel missed the memo\n'Cause we're walking on razors again\nAnd we swore to God\n we'd never let this happen, no\nWe've dragged ourselves through hell\nAnd we'll be damned if we go back\n\nBreak me down, break me down\nMake me get better\nI confess: I'm a mess, some kind of error\nWell maybe I was destined to disappear\n\nWe're just a room full of strangers\nLooking for something to save us\nAlone together, we're dying to live\nAnd we're living to die\nDying to live, living to die\n\nIt never stops\nCan't erase this\nSo cross out my eyes, tear the pages\n'Cause you and I, we're just dying to live\nAnd we're living to die\nDying to live, living to die\nIt never stops, it don't\n\nWhere did we go?\nWe're all alone, all alone\nNo place like home\nTake us back to yesterday\nSos\nSave us from ourselves\n\nWe're just a room full of strangers\nLooking for something to save us\nAlone together, we're dying to live\nAnd we're living to die\nDying to live, living to die\n\nIt never stops\nCan't erase this\nSo cross out my eyes, tear the pages\n'Cause you and I, we're just dying to live\nAnd we're living to die\nDying to live, living to die\nWe're just a room-\nWe're just a room-\nWe're just a room full of strangers\nStrangers",
        "translate": [
          {
            "id": "3ade68b8gda0511b3",
            "lang": 1,
            "url": "https:\/\/www.vagalume.com.br\/bring-me-the-horizon\/strangers-traducao.html",
            "text": "[Estranhos] \n\nTalvez eu esteja fodido para sempre\nJá deveria ter descoberto quem eu sou\nE eu não quero ter que me abrir, não\nMas é difícil se importar quando você está sangrando\n\nEntão porque você não descobre por mim, descobre por mim\nMe faça melhorar\nConfesso: Eu sou uma bagunça, algum tipo de erro\nBom, talvez eu estivesse destinado a desaparecer\n\nSomos apenas uma sala cheia de estranhos\nProcurando por algo para nos salvar\nSozinhos juntos, estamos morrendo de vontade de viver\nE estamos vivendo para morrer\nMorrendo de vontade de viver, vivendo para morrer\nSomos apenas uma sala cheia de estranhos\n\nBom, eu acho que meu anjo da guarda não recebeu o recado\nPorque nós voltamos a andar sobre navalhas\nE juramos para Deus \nque nunca deixaríamos isso acontecer, não\nNós nos arrastamos pelo inferno\nE seremos amaldiçoados se voltarmos\n\nDescubra por mim, descubra por mim\nMe faça melhorar\nConfesso: Eu sou uma bagunça, algum tipo de erro\nBom, talvez eu estivesse destinado a desaparecer\n\nSomos apenas uma sala cheia de estranhos\nProcurando por algo para nos salvar\nSozinhos juntos, estamos morrendo de vontade de viver\nE estamos vivendo para morrer\nMorrendo de vontade de viver, vivendo para morrer\n\nIsso nunca para\nNão há como apagar\nEntão, não me deixe ver, arranque as páginas\nPorque você e eu só estamos morrendo de vontade de viver\nE estamos vivendo para morrer\nMorrendo de vontade de viver, vivendo para morrer\nIsso nunca para, não\n\nPara onde nós fomos?\nEstamos sozinhos, sozinhos\nNão há lugar como a nossa casa\nNos leve de volta ao passado\nÉ um pedido de socorro\nNos salve de nós mesmos\n\nSomos apenas uma sala cheia de estranhos\nProcurando por algo para nos salvar\nSozinhos juntos, estamos morrendo de vontade de viver\nE estamos vivendo para morrer\nMorrendo de vontade de viver, vivendo para morrer\n\nIsso nunca para\nNão há como apagar\nEntão, não me deixe ver, arranque as páginas\nPorque você e eu só estamos morrendo de vontade de viver\nE estamos vivendo para morrer\nMorrendo de vontade de viver, vivendo para morrer\nSomos apenas uma sala-\nSomos apenas uma sala-\nSomos apenas uma sala cheia de estranhos\nEstranhos"
          }
        ]
      }
    ],
    "badwords": true
  }


  ngOnInit() {
    this.musicService.currentSongIndex$.subscribe(index => {
      const song = this.musicService.getCurrentSong();
      if (song) {
        this.openSong(song);
      }
    });

    this.song.addEventListener('ended', () => {
      this.nextSong();
    });
  }

  openSong(song: any) {
    console.log(song);
    this.currentMusicName = song.nome;
    this.currentArtistName = song.artist;
    this.currentAlbumPhoto = song.img;
    this.song.src = song.music;
    this.song.load();
    this.song.addEventListener('loadedmetadata', () => {
      this.duration$.next(this.song.duration);
    });
    this.song.play();
    this.song.addEventListener('timeupdate', () => {
      this.ngZone.run(() => {
        this.currentTime$.next(this.song.currentTime);
      });
    });
    this.duration$.next(this.song.duration);
  }

  seekTo() {
    this.song.currentTime = this.currentTime;
  }

  playSong() {
    this.song.play();
  }

  pauseSong() {
    this.song.pause();
  }

  setVolume(volume: any) {
    this.song.volume = volume.target.value;
  }

  backToPlaylist() {
    this.pauseSong();
    this.router.navigate(['/playlist/list/1']);
  }

  nextSong() {
    this.musicService.nextSong();
  }

  previousSong() {
    this.musicService.previousSong();
  }

}
