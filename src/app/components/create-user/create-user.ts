import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss',
})
export class CreateUser {
  userService = inject(UserService);

  router = inject(Router);

  userNameText: string = '';
  passwordText: string = '';

  createUser() {
    this.userService
      .createUser({
        email: this.userNameText,
        password: this.passwordText,
      })
      .subscribe({
        next: (response) => {
          console.log('User created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating user:', error);
        },
      });
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
