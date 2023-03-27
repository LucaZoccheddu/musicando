import { SONGS } from './../mocks/songs.mock';
import { Injectable } from '@angular/core';
import { Song } from '../models/song.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  getSongs(): Observable<Song[]> {
    return of (SONGS);
  }
}
