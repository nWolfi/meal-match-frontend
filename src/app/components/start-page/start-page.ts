import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  imports: [],
  templateUrl: './start-page.html',
  styleUrl: './start-page.scss',
})
export class StartPage {
  router = inject(Router);

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
