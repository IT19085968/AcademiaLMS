package com.lms.backend.services;

import com.lms.backend.models.Instructor;
import com.lms.backend.repositories.InstructorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructorService {
    private final InstructorRepository instructorRepository;

    @Autowired
    public InstructorService(InstructorRepository instructorRepository) {
        this.instructorRepository = instructorRepository;
    }

    public List<Instructor> getAllInstructors() {
        return instructorRepository.findAll();

    }

    public Instructor getInstructorById(String id) {
        return instructorRepository.findById(id).orElse(null);

    }

    public Instructor addNewInstructor(Instructor instructor) {
        return instructorRepository.save(instructor);
    }
}