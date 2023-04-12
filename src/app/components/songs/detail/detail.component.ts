import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  song: Song;

  constructor(
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private songService: SongService
  ) {};

  ngOnInit(): void {
    this.onGetSong();
  }

  onGetSong(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.songService.getSong(id).subscribe({
      next: (res) => {
        this.song = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.song.video
    );
  }
}
