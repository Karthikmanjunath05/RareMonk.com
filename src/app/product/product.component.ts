import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  category = '';
  id = '';
  Url = "";
  product: any;
  products: any;
  public productlist: any;
  constructor(private route: ActivatedRoute, private http:HttpClient, private cart:CartService) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.params['category'];
    this.id = this.route.snapshot.params['id'];
    if(this.category === 'mens'){
      this.Url = "https://fakestoreapi.com/products/category/men's%20clothing";
    }
    if(this.category === 'products'){
      this.Url = "http://localhost:4200/assets/data/products.json";
    }
    if(this.category === 'womens'){
      this.Url = "https://fakestoreapi.com/products/category/women's%20clothing";
    }
    if(this.category === 'electrics'){
      this.Url = "https://fakestoreapi.com/products/category/electronics";
    }
    if(this.category === 'jewellery'){
      this.Url = "https://fakestoreapi.com/products/category/jewelery";
    }
    this.getProduct();
    

  }
  getProduct(){
      this.http.get(this.Url).subscribe((products)=>{
        this.products = products;
        let index = this.products.findIndex(
          (product: {id : string}) => product.id == this.id
        );
        if(index > -1){
          this.product = this.products[index];
        }
        /*this.productlist.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price});
        });*/
      });
  }
  addtoCart(item:any){
    this.cart.addtoCart(item);
  }

}
