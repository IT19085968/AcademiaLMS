package com.lms.backend.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.ManyToMany;
import java.util.Set;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Lecturer {
    @Id
    private String id;
    private String name;
    private String email;
    private String contactNumber;
    private String password;
    private String CategoryId;
//    private String[] CourseIds;

    @ManyToMany(mappedBy = "course")
    Set<Course> courses;

}