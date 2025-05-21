import { Component } from '@angular/core';
import {TuiLink} from '@taiga-ui/core';

@Component({
  selector: 'app-footer',
  imports: [
    TuiLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}

