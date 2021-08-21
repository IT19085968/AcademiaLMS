package com.lms.backend.services;

import com.lms.backend.models.Course;
import com.lms.backend.models.Lecturer;
import com.lms.backend.repositories.LecturerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LecturerService {

    @Autowired
    private LecturerRepository lecturerRepository;

    public void addNewLecturer(Lecturer lecturer) {
        lecturerRepository.save(lecturer);
    }

    public List<Lecturer> getLecturerList() {
        return lecturerRepository.findAll();
    }
}
