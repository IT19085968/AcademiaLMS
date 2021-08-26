package com.lms.backend.models;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.List;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    private String id;

    @NotNull
    @Size(min = 2, max = 50 , message = "The name should have at least 2 characters")
    private String name;

    @NotNull
    @NotEmpty(message = "Duration cannot be empty")
    private int duration;

    @NotNull
    @Size(min = 2, max = 50 , message = "The description should have at least 2 characters")
    private String description;

     @DBRef
     private List<Lecturer> lecturers;

    // private List<String> contentIds;
    // private String categoryId;
    // private List<String> lecturerIds;
    // private List<String> studentIds;
}