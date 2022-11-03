import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { RestServiceService } from '../services/rest-service.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {
electronicscollection: any;
  ele: any;
  constructor(private rest: RestServiceService, private route: Router, private cart: CartService) { }

  ngOnInit(): void {
    this.rest.geteleData().subscribe((ele)=>{
      this.electronicscollection = ele;
      console.log(this.electronicscollection);
    })
  }
  goToProduct(category: string, id: string){
    this.route.navigate(['product', category, id])
}
}
 