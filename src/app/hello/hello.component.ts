import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiButton} from '@taiga-ui/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  imports: [
    FormsModule,
    TuiInputModule,
    TuiButton
  ],
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  username: string = '';
  message: string = 'Добро пожаловать!';
  counter: number = 0;

  incrementCounter(): void {
    this.counter++;
  }

  greet(): string {
    if (this.username.trim().length === 0) {
      return 'Пожалуйста, введите ваше имя';
    }
    return `Привет, ${this.username}! Добро пожаловать в Angular и TypeScript!`
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.username = input.value;
  }
}
