import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TuiRoot, HeaderComponent, FooterComponent, RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-intro';
}
