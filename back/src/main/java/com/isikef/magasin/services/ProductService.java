package com.isikef.magasin.services;

import java.util.List;

import com.isikef.magasin.entities.Product;


public interface ProductService {
    List<Product> getAllProducts();
    Product getProductById(Long id);
    Product createProduct(Product product);
    Product updateProduct(Long id, Product product);
    void deleteProduct(Long id);

}
