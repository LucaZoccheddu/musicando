import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { take } from 'rxjs';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit{

  @Input() pag: string;

  songs: Song[];
  totalSongs: number;
  page = 1;
  songsPerPage = 5;

  constructor (private songService: SongService) {}

  ngOnInit(): void {
    this.prendiCanzoni();
  }

  ngOnDestroy(): void {
    console.log('uscito dal componente')
  }

  prendiCanzoni() {
    this.songService.getSongs()
    .pipe(
      take(1)
    )
    .subscribe({
      next: (response) => {
        this.songs = response;
        if (this.pag == 'home') {
          this.songs = this.songs.sort((a,b) => b._id - a._id).slice(0, 5);
        }
        this.totalSongs = response.length;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onPageChange(event) {
    event.page = event.page + 1;
    this.page = event.page;
  }
}
