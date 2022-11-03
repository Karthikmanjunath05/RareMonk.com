import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
  baseUrl: string = "https://fakestoreapi.com/products/category/women's%20clothing"
  eleUrl: string = "https://fakestoreapi.com/products/category/electronics"
  jewelUrl: string = "https://fakestoreapi.com/products/category/jewelery"
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get<any>(this.baseUrl);
  }
  geteleData(){
    return this.http.get<any>(this.eleUrl);
  }
  getjewelData(){
    return this.http.get<any>(this.jewelUrl);
  }
}
