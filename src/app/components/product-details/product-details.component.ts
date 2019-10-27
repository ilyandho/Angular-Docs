import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products=  [
    {name:'First Product', description:'This is the first product here',price:'1600'},
    {name:'second Product', description:'This is the second product here',price:'1000'},
    {name:'third Product', description:'This is the third product here',price:'600'},
    {name:'fourth Product', description:'This is the fourth product here',price:'2800'},
    {name:'fifth Product', description:'This is the fifth product here',price:'800'}
  ];
  product;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product = this.products[+params.get('productId')]
    })
  }

}
