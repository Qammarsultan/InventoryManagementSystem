import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ProductServiceService } from '../../Services/product-service.service';
import { response } from 'express';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

  
  constructor(private postData : ProductServiceService) {  }



  addProduct = new FormGroup({
    ProductName : new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
    Description : new FormControl('', [Validators.required, Validators.maxLength(1000)]),
    Quantity : new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000)]),
  });

  submitProduct(){
    debugger
    this.postData.postProduct(this.addProduct.value).subscribe(response => {
      alert("Product added successfully");
      
    })
  }

  get f(){
    return this.addProduct.controls;
  }
}
