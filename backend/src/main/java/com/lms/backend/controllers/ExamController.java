package com.lms.backend.controllers;

import java.util.List;

import com.lms.backend.models.Exam;
import com.lms.backend.repositories.ExamRepository;
import com.lms.backend.services.ExamService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/exams")
@CrossOrigin
public class ExamController {

    private final ExamService examService;
    private final ExamRepository examRepository;

    @Autowired
    public ExamController(ExamService examService, ExamRepository examRepository) {
        this.examService = examService;
        this.examRepository = examRepository;
    }

    @GetMapping("/")
    public List<Exam> getExamsList() {
        return examService.getAllExams();
    }

    @GetMapping("/{id}")
    public Exam getOneExam(@PathVariable String id) {
        return examService.getExamById(id);
    }

    @PostMapping("/")
    public Exam addCourse(@RequestBody Exam exam) {
        return examService.addNewExam(exam);
    }

    @PutMapping("/")
    public Exam PutMapping(@RequestBody Exam exam) {
        // TODO: process PUT request
        Exam oldExam = examRepository.findById(exam.getId()).orElse(null);
        oldExam.setTitle(exam.getTitle());
        oldExam.setCourseId(exam.getCourseId());
        oldExam.setCourseName(exam.getCourseName());
        oldExam.setCategoryId(exam.getCategoryId());
        oldExam.setExamDate(exam.getExamDate());
        oldExam.setStartTime(exam.getStartTime());
        oldExam.setEndTime(exam.getEndTime());
        oldExam.setInstructions(exam.getInstructions());
        oldExam.setType(exam.getType());
        oldExam.setQuizId(exam.getQuizId());
        examRepository.save(oldExam);
        return oldExam;

    }

    @DeleteMapping("/{id}")
    public String DeleteExam(@PathVariable String id) {
        examRepository.deleteById(id);
        return id;
    }

}
