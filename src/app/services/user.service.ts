import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(page: number = 1, limit: number = 10): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        return users.slice(startIndex, endIndex);
      })
    );
  }

  getTotalUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
