import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  userService = inject(UserService);
  router = inject(Router);

  user: User = {
    email: '',
    password: '',
  };

  login() {
    this.user.email = this.user.email.trim();
    this.user.password = this.user.password.trim();

    if (this.user.email === '' || this.user.password === '') {
      console.error('Email must be valid and password must not be empty');
      return;
    }

    this.userService.login(this.user).subscribe((success) => {
      if (success) {
        this.router.navigate(['swipe']);
      }
    });
  }
}
