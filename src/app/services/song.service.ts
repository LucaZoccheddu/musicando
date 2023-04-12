import { SONGS } from './../mocks/songs.mock';
import { Injectable } from '@angular/core';
import { Song } from '../models/song.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  apiBaseUrl = "/api/songs";

  constructor(private http: HttpClient) { }

  getSongs() {
    return this.http.get<Song[]>(`${this.apiBaseUrl}/`)
  }

  getSong(id: string): Observable<Song> {
    return this.http.get<Song>(`${this.apiBaseUrl}/${id}`)
  }

  addSong(song: any): Observable<Song> {
    return this.http.post<any>(`${this.apiBaseUrl}/`, song)
  }
}
