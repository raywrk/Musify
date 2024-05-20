import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaylistPageRoutingModule } from './playlist-routing.module';
import { PlaylistPage } from './playlist.page';
import { ListPage } from './list/list.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlaylistPageRoutingModule
  ],
  declarations: [PlaylistPage, ListPage]
})
export class PlaylistPageModule {}
