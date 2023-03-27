import { Component, Input } from '@angular/core';
import { Song } from 'src/app/models/song.model';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent {

  @Input() songs: Song[];

}
