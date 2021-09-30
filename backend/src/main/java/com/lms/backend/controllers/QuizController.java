package com.lms.backend.controllers;

import java.util.List;

import com.lms.backend.models.Question;
import com.lms.backend.models.Quiz;
import com.lms.backend.repositories.QuizRepository;
import com.lms.backend.services.QuizService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quiz")
@CrossOrigin
public class QuizController {
    private final QuizService quizService;
    private final QuizRepository quizRepository;

    @Autowired
    public QuizController(QuizService quizService, QuizRepository quizRepository) {
        this.quizService = quizService;
        this.quizRepository = quizRepository;
    }

    @GetMapping("/")
    public List<Quiz> getQuizList() {
        return quizService.getAllQuizzes();
    }

    @GetMapping("/{id}")
    public Quiz getOneQuiz(@PathVariable String id) {
        return quizService.getQuizById(id);
    }

    @PostMapping("/")
    public Quiz addQuiz(@RequestBody Quiz quiz) {
        return quizService.addNewQuiz(quiz);
    }

    @PutMapping("/")
    public Quiz PutMapping(@RequestBody Quiz quiz) {
        // TODO: process PUT request
        Quiz oldQuiz = quizRepository.findById(quiz.getId()).orElse(null);
        oldQuiz.setExamId(quiz.getExamId());
        // List<Question> oldQuestions = quiz.getQuestions();
        // for (Question item : oldQuestions) {
        // System.out.println(item);
        // }
        oldQuiz.setQuestions(quiz.getQuestions());
        quizRepository.save(oldQuiz);
        return oldQuiz;

    }

}
