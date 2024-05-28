import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaylistPageRoutingModule } from './playlist-routing.module';
import { PlaylistPage } from './playlist.page';
import { ListPage } from './list/list.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MusicService } from '../shared/services/musica.service';
import { MockMusicService } from '../shared/services/musica-mock.service';
import { environment } from 'src/environments/environment';

// export function musicServiceFactory(http: HttpClient) {
//   return environment.useMock ? new MockMusicService(http) : new MusicService(http);
// }

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PlaylistPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PlaylistPage, ListPage],
  // providers: [
  //   {
  //     provide: MusicService,
  //     useFactory: musicServiceFactory,
  //     deps: [HttpClient]
  //   }
  // ],
})
export class PlaylistPageModule {}
