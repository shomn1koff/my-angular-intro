import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiPagination } from '@taiga-ui/kit';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TuiPagination],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  currentPage = 0; // Изменили с 1 на 0
  totalPages = 1;
  itemsPerPage = 2;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // Добавляем +1 к currentPage при вызове getUsers, так как API ожидает страницы с 1
    this.userService.getUsers(this.currentPage + 1, this.itemsPerPage)
      .subscribe(users => {
        this.users = users;
      });

    this.userService.getTotalUsers()
      .subscribe(users => {
        this.totalPages = Math.ceil(users.length / this.itemsPerPage);
      });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadUsers();
  }
}
