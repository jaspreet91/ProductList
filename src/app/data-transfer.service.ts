import { Injectable } from '@angular/core';
import { ProductModel } from './model/product.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  productsArray: ProductModel[] = [
    {_id: '1' , title: 'Iphone', image: 'https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg',
  price: 800},
  {_id: '2' , title: 'Samsung', image: 'https://ksassets.timeincuk.net/wp/uploads/sites/54/2019/03/s10plus-1-3-920x613.jpg',
  price: 1000}
  ];

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
