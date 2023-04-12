import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SongService } from 'src/app/services/song.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent {

  newSong: any;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    album: new FormControl('', Validators.required),
    artist: new FormControl('', Validators.required),
    lyrics: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    video: new FormControl('', Validators.required),
    published: new FormControl(false),
  })

  constructor (
    private router: Router,
    private modalService: NgbModal,
    private songService: SongService
  ) {};

  onSubmit() {
    const song = this.form.value;
    this.songService.addSong(song).pipe(
      take(1)
    )
    .subscribe({
      next: (response) => {
        this.newSong = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
