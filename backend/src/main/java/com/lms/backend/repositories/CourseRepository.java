package com.lms.backend.repositories;

import com.lms.backend.models.Course;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourseRepository extends MongoRepository<Course, String> {

}
