package com.lms.backend.dto;

import lombok.Data;

@Data
public class CourseCreateResponse {

    private String name;


    private int duration;


    private String description;
}
