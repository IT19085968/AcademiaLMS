package com.lms.backend.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    private String id;
    private String questionNumber;
    private String question;
    private List<String> answers;
    private String correctAnswer;

}
