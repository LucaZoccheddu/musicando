import { Component } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent {

  canzoni: Song[];

  constructor(private songService: SongService){};

  ngOnInit(): void {
    this.songService.getSongs().subscribe({
      next: (response) => {
        this.canzoni = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
