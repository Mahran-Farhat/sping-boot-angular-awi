import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../models/product';
import { Observable } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  product:Product  = new Product();

  constructor(private productService:ProductService, private router:Router){}

  public onSubmit(){
   // console.log(this.product);
    this.productService.createProduct(this.product).subscribe(
      {
        next:(respose)=>{
          console.log('product added');
          this.router.navigate(['/list-products']);
        },
        error: (error) => {
          console.log('Error add product');
        }
      }
    );
  }

  ngOnInit(){
    //this.product = new Product();
    this.product.description="default test description";
  }



}
