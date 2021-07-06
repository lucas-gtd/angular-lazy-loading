import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { CreatePlaylistComponent } from './pages/playlist/create-playlist/create-playlist.component';
import { PlaylistDetailsComponent } from './pages/playlist/playlist-details/playlist-details.component';
import { PlaylistModule } from './pages/playlist/playlist.module';
import { PlaylistsComponent } from './pages/playlist/playlists/playlists.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./pages/playlist/playlist.module').then((m) => m.PlaylistModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    PlaylistModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
