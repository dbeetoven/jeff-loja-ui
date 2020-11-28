import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public getItem(key: string): string {
    return localStorage.getItem(key);
  }
  public deleteStorage(): void {
    localStorage.clear();
  }
}
