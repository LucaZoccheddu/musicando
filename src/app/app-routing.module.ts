import { RegistrationComponent } from './components/user/registration/registration.component';
import { UserComponent } from './components/user/user.component';
import { DetailComponent } from './components/songs/detail/detail.component';
import { SongsListComponent } from './components/songs/songs-list/songs-list.component';
import { SongsComponent } from './components/songs/songs.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './components/songs/add-song/add-song.component';
import { LoginComponent } from './components/user/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'canzoni', component: SongsComponent, children: [
    { path: '', component: SongsListComponent},
    { path: 'aggiungi', component: AddSongComponent},
    { path: 'dettaglio/:title/:_id', component: DetailComponent}
  ]},
  { path: 'registrazione', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
