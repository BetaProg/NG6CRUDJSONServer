import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http:Http) { }

  confirmationString:string="Patient details has been added successfully";
  isAdded:boolean=false;

  productObj:object={};

  addNewProduct=function(product){
    this.productObj={
      "name":product.name,
      "number":product.number
    }

    this.http.post("http://localhost:3000/products",this.productObj).subscribe((res:Response)=>{
        this.isAdded=true;
      });
  }
  ngOnInit() {
  }

}