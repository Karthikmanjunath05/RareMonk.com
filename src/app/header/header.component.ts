import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalItem : number =0;
  public searchText !: string;
  constructor(private route : Router, private CartService: CartService) { }

  ngOnInit(): void {
    this.CartService.getProducts().subscribe(res=>{
  this.totalItem = res.length;
    })
  }
 gotoHome(){
  this.route.navigate(['home']);
 }
 gotoMens(){
  this.route.navigate(['mens']);
 }
 gotoWomens(){
  this.route.navigate(['womens']);
 }
 gotoElectronics(){
  this.route.navigate(['electronics']);
 }
 gotoJewellery(){
  this.route.navigate(['jewellery']);
 }
 gotoLogout(){
  alert("You are logging Out!")
  this.route.navigate(['login'])
 }
 gotoCart(){
  this.route.navigate(['cart']);
 }

search(event:any)
{
  this.searchText = (event.target as HTMLInputElement).value;
  console.log(this.searchText);
  this.CartService.search.next(this.searchText);
}
}
