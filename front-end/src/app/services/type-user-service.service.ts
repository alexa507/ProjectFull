import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeUser } from '../models/type-user';

@Injectable({
  providedIn: 'root'
})
export class TypeUserServiceService {

  private typeUserUrl: string;

  constructor(private http: HttpClient) {
    this.typeUserUrl = 'http://localhost:8081/typeUser';
  }

  public findAll(): Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(this.typeUserUrl);
  }

  public findById(id: number) {
    return this.http.get<TypeUser>(this.typeUserUrl + '/' + id);
  }

  public save(typeUser: TypeUser) {
    return this.http.post<TypeUser>(this.typeUserUrl, typeUser, { responseType: 'text' as 'json' });
  }

  public update(typeUser: TypeUser, id: number) {
    return this.http.put<TypeUser>(this.typeUserUrl + '/' + id, typeUser, { responseType: 'text' as 'json' });
  }

  public delete(id: number) {
    return this.http.delete(this.typeUserUrl + '/' + id);
  }
}
