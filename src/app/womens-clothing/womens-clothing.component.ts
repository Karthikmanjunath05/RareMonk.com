import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from '../services/rest-service.service';

@Component({
  selector: 'app-womens-clothing',
  templateUrl: './womens-clothing.component.html',
  styleUrls: ['./womens-clothing.component.scss']
})
export class WomensClothingComponent implements OnInit {
  womenscollection: any;

  constructor(private rest: RestServiceService,private route:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.rest.getData().subscribe((women)=>{
      this.womenscollection = women;
      console.log(this.womenscollection);
    });
    
  }
  goToProduct(category: string, id: string){
    this.route.navigate(['product', category, id])
}
}
 