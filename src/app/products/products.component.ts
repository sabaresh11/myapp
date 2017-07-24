import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
//Prod_name: string;
prod_name : string[];
prod_id:number[];
prod_cost: number[];
prod_gst: number[];

  constructor() { }

  ngOnInit() {
  }


 addp(value)
 {
 		this.prod_name.push(value.Product_name);
 		this.prod_id.push(value.Product_id);
 		this.prod_cost.push(value.Product_cost);
 		this.prod_gst.push(value.Product_gst);

 }
 }