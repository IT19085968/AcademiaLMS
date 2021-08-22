package com.lms.backend.controllers;

import java.util.List;
import java.util.stream.Collectors;

import com.lms.backend.dto.CategorySuggestionResponse;
import com.lms.backend.dto.CourseSuggestionResponse;
import com.lms.backend.models.Category;
import com.lms.backend.models.Course;
import com.lms.backend.services.CategoryService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @Autowired(required=true)
    private ModelMapper modelMapper;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

//    @GetMapping("/")
//    public List<Category> getCategories() {
//        return categoryService.getAllCategories();
//    }

    @GetMapping("/suggestion")
    public ResponseEntity<List<CategorySuggestionResponse>> getAdminList(){
        List<Category> categoryList = categoryService.getAllCategories();
        List<CategorySuggestionResponse> categorySuggestionResponses = categoryList.stream().map(category -> modelMapper.map(category, CategorySuggestionResponse.class)).collect(Collectors.toList());
        return new ResponseEntity<>(categorySuggestionResponses, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Category getOneCategory(@PathVariable String id) {
        return categoryService.getCategoryById(id);
    }

    @PostMapping("/")
    public void addCategory(@RequestBody Category category) {
        categoryService.addNewCategory(category);
    }

}
