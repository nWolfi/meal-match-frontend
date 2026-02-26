import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  router = inject(Router);
  userService = inject(UserService);

  navigate(url: string) {
    this.router.navigate([url]);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }
}
