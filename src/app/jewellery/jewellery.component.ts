import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from '../services/rest-service.service';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.scss']
})
export class JewelleryComponent implements OnInit {
jewellerycollection: any;
jewel : any;
  constructor(private rest: RestServiceService, private route: Router) { }

  ngOnInit(): void {
    this.rest.getjewelData().subscribe((jewel)=>{
      this.jewellerycollection = jewel;
      console.log(this.jewellerycollection);
    })
  }
  goToProduct(category: string, id: string){
    this.route.navigate(['product', category, id])
}
}
