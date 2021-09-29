package com.lms.backend.repositories;

import com.lms.backend.models.Syllabus;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SyllabusRepository extends MongoRepository<Syllabus, String> {

}
