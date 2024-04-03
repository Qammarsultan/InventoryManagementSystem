import { Component } from '@angular/core';
import { ProductServiceService } from '../../Services/product-service.service';
import { response } from 'express';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  Result: any;
  DeleteRecord : any;
  Data : any;

  

  
  constructor(private getProduct: ProductServiceService) {}
 
  ngOnInit(){
    this.GetProductsByUser();
    
  }
  GetProductsByUser(){
    debugger
    this.getProduct.getAllProducts().subscribe(response  => {
      this.Result = response;
    
    })
  }

  DeleteProdduct(id :any){
    debugger
    
    this.getProduct.deleteProduct(id).subscribe(response =>{
      alert("Product deleted")
      this.GetProductsByUser();
    })

  }

  GetProductById(id :any){
    debugger
    this.getProduct.GetProductById(id).subscribe(response =>{
      console.log("user detail",this.Data =  response);
      
     
  })
  }

  
}

