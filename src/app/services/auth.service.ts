import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl = 'api/users'

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  login(email: string, password: string) {
    const user = {email: email, password: password};
    return this.http.post<any>(`${this.apiBaseUrl}/login`, user)
  }

  saveStorage(res: User) {
    const user = {
      name: res.name,
      username: res.username,
      email: res.email,
      password: res.password,
      genres: res.genres
    }

    this.userService.userRole.next(res.role);
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) != null;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userService.datiUtente.next('');
  }
}
