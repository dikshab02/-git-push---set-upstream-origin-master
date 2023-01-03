import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/model/user.model';
import { ILogin } from 'src/viewModel/login.model';

@Injectable({
  providedIn: 'root',
})
export class CrudHttpService {
  private userkey = 'loggedinuser';
  public storeUserData: IUser | undefined;
  constructor(private http: HttpClient) {}

  //api call for logged in user
  loginDetails(login: ILogin): Observable<IUser[]> {
    let url = environment.apiUrl + 'user/login';
    return this.http.post<IUser[]>(url, login);
  }

  // user saved in local storage
  saveToStorage(user: IUser) {
    console.log('user=', user);
    localStorage.setItem(this.userkey, JSON.stringify(user));
  }

  //user removed
  logout() {
    localStorage.removeItem(this.userkey);
  }

  //get user  from local storage
  getUser(): IUser | undefined {
    let u = localStorage.getItem(this.userkey);
    return u ? JSON.parse(u) : undefined;
  }

  //check user is logged in
  isLoggedin(): boolean {
    return localStorage.getItem(this.userkey) ? true : false;
  }
}
