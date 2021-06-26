import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {urls} from 'src/constants/urls';
import {IUser} from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser

  constructor(private httpClient: HttpClient) {
  }

  postUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }
}
