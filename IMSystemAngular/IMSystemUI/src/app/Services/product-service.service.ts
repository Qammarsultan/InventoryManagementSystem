import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  private getUrl = 'https://localhost:7205/api/Products/GetAllProduct';
  private postUrl = 'https://localhost:7205/api/Products/CreateProduct';
  private deleteUrl = 'https://localhost:7205/api/Products/DeleteProduct';
  private getUserByIdUrl = 'https://localhost:7205/api/Products/GetProductById';
  private updateUrl = 'https://localhost:7205/api/Products/UpdateProduct'



  constructor(private client : HttpClient) { }

  getAllProducts(){
    debugger
   return this.client.get(this.getUrl)
  }

  postProduct(data : any){
    debugger
    return this.client.post(this.postUrl, data)
  }

  deleteProduct(id : any){
    debugger
    return this.client.delete(this.deleteUrl +"/"+ id);
  }

  GetProductById(id : any){
    return this.client.get(this.getUserByIdUrl +"/"+ id);
  }
}
