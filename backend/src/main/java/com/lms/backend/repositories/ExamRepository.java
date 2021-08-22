package com.lms.backend.repositories;

import com.lms.backend.models.Exam;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExamRepository extends MongoRepository<Exam, String> {

}
