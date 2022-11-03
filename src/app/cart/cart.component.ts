import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal:number =0;
  

  constructor(private cart:CartService,private route:Router) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cart.getTotalPrice();
      console.log(this.grandTotal)
    })
  }
removeItem(item:any){
  this.cart.removeCartItem(item);
}
emptyCart(){
  this.cart.removeAllCart();
}
addtoCart(item:any){
  this.cart.addtoCart(item);
}
gotopay(){
  this.route.navigate(['pay']);
}
}
