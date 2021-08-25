package com.lms.backend.controllers;

import java.util.List;
import java.util.stream.Collectors;

import com.lms.backend.dto.CourseSuggestionResponse;
// import com.lms.backend.dto.LecturerSuggestionResponse;
import com.lms.backend.models.Course;
// import com.lms.backend.models.Lecturer;
import com.lms.backend.services.CourseService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/courses")
@CrossOrigin
public class CourseController {

    private final CourseService courseService;

    @Autowired(required = true)
    private ModelMapper modelMapper;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/")
    public List<Course> getCoursesList() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Course getOneCourse(@PathVariable String id) {
        return courseService.getCourseById(id);
    }

    @PostMapping("/")
    public void addCourse(@RequestBody Course course) {
        courseService.addNewCourse(course);
    }

    @GetMapping("/suggestion")
    public ResponseEntity<List<CourseSuggestionResponse>> getAdminList() {
        List<Course> courseList = courseService.getAllCourses();
        List<CourseSuggestionResponse> courseSuggestionResponses = courseList.stream()
                .map(course -> modelMapper.map(course, CourseSuggestionResponse.class)).collect(Collectors.toList());
        return new ResponseEntity<>(courseSuggestionResponses, HttpStatus.OK);
    }

}
