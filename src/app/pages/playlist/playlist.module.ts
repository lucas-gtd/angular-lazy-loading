import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'playlist/details', component: PlaylistDetailsComponent },
  { path: 'playlist/create', component: CreatePlaylistComponent },
];

@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistDetailsComponent,
    CreatePlaylistComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class PlaylistModule {}
