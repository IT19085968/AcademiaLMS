package com.lms.backend.repositories;

import com.lms.backend.models.Lecturer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LecturerRepository extends MongoRepository<Lecturer, String> {
}
