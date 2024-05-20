import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./nav/nav.module').then(m => m.NavPageModule)
  },
  // {
  //   path: 'playlist',
  //   loadChildren: () => import('./playlist/playlist.module').then(m => m.PlaylistPageModule)
  // },
  // {
  //   path: 'player/:id',
  //   loadChildren: () => import('./player/player.module').then( m => m.PlayerPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
