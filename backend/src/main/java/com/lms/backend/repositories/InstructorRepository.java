package com.lms.backend.repositories;

import com.lms.backend.models.Instructor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InstructorRepository extends MongoRepository<Instructor, String> {

}
