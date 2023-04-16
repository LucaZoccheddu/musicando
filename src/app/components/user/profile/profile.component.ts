import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user: any;

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) != null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
}
