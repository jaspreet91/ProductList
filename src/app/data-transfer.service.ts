import { Injectable } from '@angular/core';
import { ProductModel } from './model/product.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  productsArray: ProductModel[] = [];

  singleProduct = new Subject<ProductModel>();

  constructor(private http: HttpClient) { }

  saveData(data: ProductModel) {
    this.http.post<{message: string}>('http://localhost:4000', {
      title: data.title,
      image:  data.image,
      price:  data.price,
      likes: 0,
    description:  data.description,
    }).subscribe((message) => {
    });
  }

  updateData(data: ProductModel) {
    this.http.put<{message: string}>('http://localhost:4000', {
      _id: data._id,
      title: data.title,
      image: data.image,
      price: data.price,
      likes: data.likes,
    description: data.description
    }).subscribe((message) => {
    });
  }
}
