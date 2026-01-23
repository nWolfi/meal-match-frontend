import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../model/login.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {
  login: LoginModel = { username: '', password: '' };

  performLogin() {
    this.login = {
      username: this.login.username,
      password: this.login.password,
    };
    console.log('Logging in with:', this.login);
  }
}
