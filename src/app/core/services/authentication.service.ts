import { Injectable } from '@angular/core';
import { KEYS } from 'src/app/constants/Keys';
import { API_ENDPOINT } from 'src/app/constants';
import { LoginResponse } from 'src/app/models/login/LoginResponse';
import { ILogin, IUser } from 'src/app/models';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { BaseabmService } from './baseabm.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private http: BaseabmService,
    private localStorageService: LocalstorageService
  ) {}

  public login(loginData: ILogin): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(API_ENDPOINT.LOGIN, loginData);
  }

  public saveResLoginData(token: string, user: string): void {
    this.localStorageService.setItem(KEYS.TOKEN_HEADER, token);
    this.localStorageService.setItem(KEYS.IUSER, user);
  }

  public getToken(): string {
    return this.localStorageService.getItem(KEYS.TOKEN_HEADER);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  public getUser(): IUser {
    return JSON.parse(this.localStorageService.getItem(KEYS.IUSER)) || {};
  }

  private cleanLocalStorage(): void {}
}
