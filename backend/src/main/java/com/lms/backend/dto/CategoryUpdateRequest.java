package com.lms.backend.dto;

import lombok.Data;
import org.jetbrains.annotations.NotNull;

import javax.validation.constraints.Size;
import java.util.Set;

@Data
public class CategoryUpdateRequest {

    @NotNull
    @Size(min = 2, max = 50 , message = "The name should have at least 2 characters")
    private String name;

    @NotNull
    @Size(min = 2, max = 50 , message = "The name should have at least 2 characters")
    private String description;

    private Set<CategoryCreateRequest.Course> courses;

    @Data
    private static class Course {
        private String id;
    }
}
