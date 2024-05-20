import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistPage } from './playlist.page';
import { ListPage } from './list/list.page';

const routes: Routes = [
  { path: '', component: PlaylistPage },
  { path: 'list/:id', component: ListPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistPageRoutingModule {}
