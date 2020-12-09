import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Icategory, IOrder, ISize } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private firestore: AngularFirestore) {}

  public addSize(size: ISize): void {
    this.firestore
      .collection('sizes')
      .add(size)
      .then((res) => {
        if (!environment.production) {
          console.log(`Size added :${res}`);
        }
      });
  }
  public addCategory(category: Icategory): void {
    this.firestore
      .collection('categories')
      .add(category)
      .then((res) => {
        if (!environment.production) {
          console.log(`Category added :${res}`);
        }
      });
  }
  public addOrderTransaction(order: IOrder): Promise<any> {
    return this.firestore.collection('orders').add(order);
  }
}
