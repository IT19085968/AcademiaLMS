package com.lms.backend.services;

import java.util.List;

import com.lms.backend.models.Exam;
import com.lms.backend.repositories.ExamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExamService {
    private final ExamRepository examRepository;

    @Autowired
    public ExamService(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }

    public List<Exam> getAllExams() {
        return examRepository.findAll();

    }

    public Exam getExamById(String id) {
        return examRepository.findById(id).orElse(null);

    }

    public void addNewExam(Exam exam) {
        examRepository.save(exam);
    }

}
