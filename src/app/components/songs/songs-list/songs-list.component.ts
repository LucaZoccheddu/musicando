import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit{

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
