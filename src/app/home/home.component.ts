import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menscollection: any;
  productscollection: any;
 

  constructor(private route:Router, private http: HttpClient, private cart: CartService) { }

  ngOnInit(): void {
    this.getmens();
    this.getProducts();
    
  }
  gotoMens(){
    this.route.navigate(['mens']);
   }
   gotoWomens(){
    this.route.navigate(['womens'])
  }
   getmens(){
    this.http.get('http://localhost:4200/assets/data/mens.json').subscribe((mens) =>{
      this.menscollection = mens;
      console.log(this.menscollection);
    });
   }
   getProducts(){
    this.http.get('http://localhost:4200/assets/data/products.json').subscribe((products) =>{
      this.productscollection = products;
      console.log(this.productscollection);
    });
  }
  goToProduct(category: string, id: string){
      this.route.navigate(['product', category, id]);
  }
  
}
