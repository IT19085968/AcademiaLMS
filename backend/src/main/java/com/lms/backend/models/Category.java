package com.lms.backend.models;
import java.util.List;
import java.util.Set;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String name;

    private String description;

    @ManyToMany
    @JoinTable(name = "course-category",
            joinColumns = @JoinColumn(name = "category_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "course_id", referencedColumnName = "id"))
    private Set<Course> courses;


//    private List<String> LecturerIds;
//    private List<String> CourseIds;
}