import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiBaseUrl = "api/users";
  datiUtente = new ReplaySubject();
  userRole = new ReplaySubject();

  constructor(private http: HttpClient) { }

  aggiungiUtente(user: User): Observable<User> {
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, user)
  }
}
