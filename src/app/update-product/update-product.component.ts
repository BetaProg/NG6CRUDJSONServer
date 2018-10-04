import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  data:object={};
  products=[];
  productObj:object={};
  private headers=new Headers({'Content-Type':'application/json'});

  constructor(private router:Router,private route:ActivatedRoute,private http:Http) { }
  

  updateProduct(product){
    this.productObj={
      "name":product.name,
      "number":product.number
    };
   
    const url=`${"http://localhost:3000/products"}/${this.id}`;
    this.http.put(url,JSON.stringify(this.productObj),{headers:this.headers}).toPromise()
    .then(()=>{
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=+params['id'];
      // console.log(this.id);
    })

    this.http.get("http://localhost:3000/products").subscribe(
      (res:Response)=>{
        this.products=res.json();
        for(var i=0;i<this.products.length;i++){
          if(parseInt(this.products[i].id)===this.id){
            this.data=this.products[i];
            // console.log(this.data);
            break;
          }
        }
      }
    )
  }

}