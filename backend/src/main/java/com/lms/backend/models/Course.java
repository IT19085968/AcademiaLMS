package com.lms.backend.models;

import lombok.*;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Course {
    @Id
    private String id;


    private String name;


    private int duration;


    private String description;

    @ManyToMany
    @JoinTable(name = "lecturer-course",
            joinColumns = @JoinColumn(name = "course_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "lecturer_id", referencedColumnName = "id"))
    private Set<Lecturer> lecturers;

    // private List<String> contentIds;
    // private String categoryId;
    // private List<String> lecturerIds;
    // private List<String> studentIds;
}