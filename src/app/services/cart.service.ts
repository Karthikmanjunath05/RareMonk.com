import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  len : any;
  constructor() {} 
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() {
    let grandTotal:number = 0;
    this.cartItemList.map((a: any)=>{
      grandTotal += a.price;

    })
    return grandTotal;
  }
  removeCartItem(product: any){
   /* this.cartItemList.map((a:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(this.cartItemList.indexOf(product),1);
        
      }
    });*/
    this.cartItemList.splice(this.cartItemList.indexOf(product),1);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  cartCount(){
    this.len = this.cartItemList.lengh();
  }
}
