import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: 'playtlist.page.html',
  styleUrls: ['playlist.page.scss']
})
export class PlaylistPage {

  isSearchbarVisible: boolean = false;
  isAnimating: boolean = false;
  isModalOpen = false;

  constructor() {}

  playList = [
    {id: 1, foto: "../../assets/playlist/playlist-rock.png", nome: "Let's Rock", songs: 20},
    {id: 2, foto: "../../assets/playlist/playlist-2.png", nome: "Lofi loft", songs: 20},
    {id: 3, foto: "../../assets/playlist/playlist-3.png", nome: "rain on my window", songs: 20},
    {id: 4, foto: "../../assets/playlist/playlist-4.png", nome: "Anime OSTs", songs: 20},
    {id: 5, foto: "../../assets/playlist/playlist-1.png", nome: "current favorites", songs: 20},
    {id: 6, foto: "../../assets/playlist/playlist-2.png", nome: "Lofi loft", songs: 20},
    {id: 7, foto: "../../assets/playlist/playlist-3.png", nome: "rain on my window", songs: 20},
    {id: 8, foto: "../../assets/playlist/playlist-4.png", nome: "Anime OSTs", songs: 20},
  ]

 toggleSearchbar() {
    if (this.isSearchbarVisible) {
      this.startCloseAnimation();
    } else {
      this.isSearchbarVisible = true;
    }
  }

  startCloseAnimation() {
    this.isAnimating = true;
    setTimeout(() => {
      this.isSearchbarVisible = false;
      this.isAnimating = false;
    }, 300); // match the duration of the fadeOut animation
  }

  closeSearchbar() {
    this.startCloseAnimation();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
