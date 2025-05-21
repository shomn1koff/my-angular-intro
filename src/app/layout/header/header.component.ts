import { Component } from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    TuiButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}

  navigate(path: string): void {
    this.router.navigate([`/${path}`])
      .then(success => {
        if (!success) {
          console.warn(`Cannot navigate to '${path}'`);
        }
      })
      .catch(error => {
        console.error('Navigation error: ', error);
      })
  }
}
