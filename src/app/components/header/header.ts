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

  navigate(url: string): void {
    this.router.navigate([url]);
  }

  isActive(url: string): boolean {
    const currentPath = this.router.url.split('?')[0].split('#')[0];
    const targetPath = `/${url}`.replace(/\/+/g, '/');
    return currentPath === targetPath;
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['login']);
  }
}
