import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: any;

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) != null) {
      this.user = JSON.parse(localStorage.getItem('user'))
    } else {
      this.user = '';
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
