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
    private String Name;
    private int Duration;
    private String Description;
    private List<String> ContentIds;
    private String CategoryId;
    private List<String> LecturerIds;
    private List<String> StudentIds;
}