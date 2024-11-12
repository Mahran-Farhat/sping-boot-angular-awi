package com.isikef.magasin.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isikef.magasin.entities.Product;
import com.isikef.magasin.repository.ProductRepository;

@Service
public class ProductServiceImp implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).get();
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Long id, Product product) {
        Product current = productRepository.findById(id).get();
        current.setCategory(product.getCategory());
        current.setName(product.getName());
        current.setDescription(product.getDescription());
        current.setPrice(product.getPrice());
        current.setNumber(product.getNumber());
        current.setQte(product.getQte());
        return productRepository.save(current);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

}
