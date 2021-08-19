package com.lms.backend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Exam {
    @Id
    private String id;
    private String title;
    private String CourseId;
    private String CategoryId;
    private String examDate;
    private String startTime;
    private String endTime;
    private String instructions;
    private String type;
    
    private String[] LessonIds;
    
}