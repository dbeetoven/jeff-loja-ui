import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailSenderService {
  constructor(private httpService: HttpClient) {}

  sendOrderMail(order: IOrder): Observable<any> {
    return this.httpService.post(
      `${environment.mailSenderApi}/sendMail`,
      order
    );
  }
}
