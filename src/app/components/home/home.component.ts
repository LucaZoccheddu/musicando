import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  songs: Song[];
  name: string;
  email: string;

  constructor(private songService: SongService){};

  ngOnInit(): void {
    this.songService.getSongs().subscribe({
      next: (response) => {
        this.songs = response;
        this.songs = this.songs.sort((a,b) => b._id - a._id).slice(0, 5);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
