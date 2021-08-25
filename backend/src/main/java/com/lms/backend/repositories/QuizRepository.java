package com.lms.backend.repositories;

import com.lms.backend.models.Quiz;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuizRepository extends MongoRepository<Quiz, String> {

}
