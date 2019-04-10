import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { ProductModel } from '../model/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {

  detailedProduct: ProductModel;
  params: string;
  arrayIndex: number;
  currentLikes: number;
  constructor(private dataTransferService: DataTransferService,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
  this.activatedRoute.params.subscribe((params) => {
   this.params = params.id;
   if (this.dataTransferService.productsArray.length === 0) {

    this.http.get('http://localhost:4000').subscribe((data: ProductModel[]) => {
      this.dataTransferService.productsArray = data;
      this.detailedProduct = this.dataTransferService.productsArray.find( product => product._id === this.params);

      if (this.detailedProduct.likes === undefined) {
        this.currentLikes = 0;
     } else {
        this.currentLikes = this.detailedProduct.likes;
     }
    });
  } else {
    console.log('else block');

    this.http.get('http://localhost:4000').subscribe((data: ProductModel[]) => {
    this.dataTransferService.productsArray = data;
    this.detailedProduct = this.dataTransferService.productsArray.find( product => product._id === this.params);

    if (this.detailedProduct.likes === undefined) {
      this.currentLikes = 0;
   } else {
      this.currentLikes = this.detailedProduct.likes;
   }
  });
  }

  });
  }

  like() {
    this.currentLikes++;
    this.detailedProduct.likes = this.currentLikes;
    this.dataTransferService.updateData(this.detailedProduct);
  //  this.arrayIndex = this.dataTransferService.productsArray.findIndex(p => p._id === this.params) ;
  //  this.currentLikes++;
  //  this.dataTransferService.productsArray[this.arrayIndex].likes = this.currentLikes;
  }

}
