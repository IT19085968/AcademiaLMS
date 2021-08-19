package com.lms.backend.controllers;

import java.util.List;

import com.lms.backend.models.Category;
import com.lms.backend.services.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categories")
@CrossOrigin
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/")
    public List<Category> getCategories() {
        return categoryService.getAllCategories();
    }

    // @GetMapping("/{id}")
    // public List<String> getCoursesByCategoryId(@PathVariable String id) {
    // Category category = categoryService.getCoursesOfaCategory(id);
    // return category.getCourseIds();
    // }

    @GetMapping("/{id}")
    public Category getOneCategory(@PathVariable String id) {
        return categoryService.getCategoryById(id);
    }

    @PostMapping("/")
    public void addCategory(@RequestBody Category category) {
        categoryService.addNewCategory(category);
    }

}
