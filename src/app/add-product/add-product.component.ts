import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private dataTransferService: DataTransferService,
              private router: Router) { }

  buttonView = false;

  ngOnInit() {
  }

  onSubmit(newProductData: NgForm) {
    this.dataTransferService.saveData(newProductData.value);
    newProductData.reset();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

}
