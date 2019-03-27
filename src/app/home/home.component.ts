import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { ProductModel } from '../model/product.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataTransferService: DataTransferService,
              private router: Router,
              private http: HttpClient ) { }

  productArray: ProductModel[];
  dataTransfered =  false;
  ngOnInit() {

    this.http.get('http://localhost:4000').subscribe((data: ProductModel[]) => {
      this.dataTransferService.productsArray = data;
      this.productArray =  this.dataTransferService.productsArray;
    });

  }

  sendData(data: ProductModel) {
    this.router.navigate([data._id]);
    this.dataTransferService.singleProduct.next(data);
  }
}
