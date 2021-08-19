package com.lms.backend.services;

import java.util.List;

import com.lms.backend.models.Category;
import com.lms.backend.repositories.CategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();

    }

    public Category getCategoryById(String id) {
        return categoryRepository.findById(id).orElse(null);

    }

    public Category getCoursesOfaCategory(String id) {
        return categoryRepository.findById(id).orElse(null);

    }

    public void addNewCategory(Category category) {
        categoryRepository.save(category);
    }

}
