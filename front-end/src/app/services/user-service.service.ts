import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserServiceService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8081/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + id);
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user, { responseType: 'text' as 'json' });
  }

  public update(user: User, userId: number) {
    return this.http.put<User>(this.userUrl + '/' + userId, user, { responseType: 'text' as 'json' });
  }

  public delete(userId: number) {
    return this.http.delete(this.userUrl + '/' + userId);
  }
}
