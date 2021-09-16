package com.lms.backend.services;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import com.lms.backend.models.Category;
import com.lms.backend.models.Course;
import com.lms.backend.models.Lecturer;
import com.lms.backend.repositories.CategoryRepository;

import com.lms.backend.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    @Autowired
    private CourseRepository courseRepository;

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

    public Category addNewCategory(Category category) {
        List<Course> list = category.getCourses().stream().map(course ->
                courseRepository.findById(course.getId()).get()
        ).collect(Collectors.toList());

        category.setCourses(new HashSet<>(list));

        return  categoryRepository.save(category);
    }

    public void deleteCategory(String id){
        boolean exists= categoryRepository.existsById(id);
        if(!exists){
            throw  new IllegalStateException("Category with id "+id+" does not exists");
        }

        categoryRepository.deleteById(id);
    }

}
