import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mens-clothing',
  templateUrl: './mens-clothing.component.html',
  styleUrls: ['./mens-clothing.component.scss']
})
export class MensClothingComponent implements OnInit {
  
  menscollection: any ;
  constructor(private Http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.getMens();
   
  }
getMens(){
  this.Http.get("http://localhost:4200/assets/data/mens.json").subscribe((mens) => {
    this.menscollection = mens;
    console.log(this.menscollection);
  })
}
goToProduct(category: string, id: string){
  this.router.navigate(['product', category, id])
}
}
