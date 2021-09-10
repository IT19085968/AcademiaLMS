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
public class Syllabus {
    @Id
    private String id;
    private String courseId;
    private String courseName;
    private String instructorName;
    private int numberOfLessons;
    

}