import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloComponent} from './hello/hello.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-intro';
}
