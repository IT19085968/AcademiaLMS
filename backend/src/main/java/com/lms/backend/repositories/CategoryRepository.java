package com.lms.backend.repositories;

import com.lms.backend.models.Category;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoryRepository extends MongoRepository<Category, String> {

}
