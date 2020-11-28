import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  public setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  public removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  public getItem(key: string): string {
    return sessionStorage.getItem(key);
  }
  public deleteStorage(): void {
    sessionStorage.clear();
  }
}
