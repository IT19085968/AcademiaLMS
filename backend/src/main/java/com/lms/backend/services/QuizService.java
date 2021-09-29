package com.lms.backend.services;

import java.util.List;

import com.lms.backend.models.Quiz;
import com.lms.backend.repositories.QuizRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuizService {
    private final QuizRepository quizRepository;

    @Autowired
    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();

    }

    public Quiz getQuizById(String id) {
        return quizRepository.findById(id).orElse(null);

    }

    public Quiz addNewQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

}
