package com.lms.backend.controllers;

import java.util.List;

import com.lms.backend.models.Exam;
import com.lms.backend.services.ExamService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/exams")
@CrossOrigin
public class ExamController {

    private final ExamService examService;

    @Autowired
    public ExamController(ExamService examService) {
        this.examService = examService;
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

}
