import { Component, OnInit  } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { CommonModule } from '@angular/common';
import { error } from 'console';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {


  products:Product[] = [];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.loadProducts();
  }

  public loadProducts():void{
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  delete(id: number): void {
     //alert('delete product with id :'+id);
    this.productService.deleteProductById(id).subscribe({
      next: (response) => {
        console.log(response);  // You could log or display a success message
        this.loadProducts();      },
      error: (err) => {
        console.error('Error deleting product:', err);  // Handle error appropriately
      }
    });
  }

}
