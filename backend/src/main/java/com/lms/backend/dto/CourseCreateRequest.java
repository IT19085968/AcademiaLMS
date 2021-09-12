package com.lms.backend.dto;

import lombok.Data;
import org.jetbrains.annotations.NotNull;

import javax.validation.constraints.Size;
import java.util.Set;

@Data
public class CourseCreateRequest {

    @NotNull
    @Size(min = 2, max = 50 , message = "The name should have at least 2 characters")
    private String name;

    @NotNull
    private int duration;

    @NotNull
    @Size(min = 2, max = 50 , message = "The description should have at least 2 characters")
    private String description;

    private Set<Lecturer> lecturers;

    @Data
    private static class Lecturer {
        private String id;
    }
}
