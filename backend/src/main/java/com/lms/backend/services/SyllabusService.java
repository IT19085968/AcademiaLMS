package com.lms.backend.services;

import java.util.List;

import com.lms.backend.models.Syllabus;
import com.lms.backend.repositories.SyllabusRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SyllabusService {
    private final SyllabusRepository syllabusRepository;

    @Autowired
    public SyllabusService(SyllabusRepository syllabusRepository) {
        this.syllabusRepository = syllabusRepository;
    }

    public List<Syllabus> getAllSyllabus() {
        return syllabusRepository.findAll();

    }

    public Syllabus getSyllabusById(String id) {
        return syllabusRepository.findById(id).orElse(null);

    }

    public Syllabus addNewSyllabus(Syllabus syllabus) {
        return syllabusRepository.save(syllabus);
    }

}
