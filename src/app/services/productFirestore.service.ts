import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { IProduct } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductFirestore extends FirestoreService<IProduct> {
  protected basePath = 'products';
}
