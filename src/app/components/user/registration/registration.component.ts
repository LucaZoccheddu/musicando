import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { CustomValidator } from '../customValidator';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  newUser: User;

  generi = [
    {name: "Rock"},
    {name: "Pop"},
    {name:"Rap"}];

  constructor(
    private config: PrimeNGConfig,
    private userService: UserService,
    private router: Router
    ) {}

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    repPassword: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    genres: new FormControl(''),
    terms: new FormControl('', Validators.requiredTrue)
  },
  [CustomValidator.matchValidator('password', 'repPassword')]
  );

  onSubmit() {
    const user = {
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      username: this.form.value.username,
      email: this.form.value.email,
      password: this.form.value.password,
      date: this.form.value.date,
      genres: this.form.value.genres,
    }
    this.userService.aggiungiUtente(user).pipe(
      take(1)
    ).subscribe({
      next: (response) => {
        this.newUser = response;
        this.userService.datiUtente.next(user);
      }
    })
    this.router.navigate(['home']);
  };

  ngOnInit() {
    this.config.setTranslation({
      weak: 'debole',
      medium: 'medio',
      strong: 'forte',
      passwordPrompt: 'scrivi una password',
    });
  }
}
