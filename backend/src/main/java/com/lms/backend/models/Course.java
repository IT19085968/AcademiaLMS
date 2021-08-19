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
public class Course {
    @Id
    private String id;
    private String name;
    private int duration;
    private String description;
    private List<String> contentIds;
    private String categoryId;
    private List<String> lecturerIds;
    private List<String> studentIds;
}