package com.lms.backend.controllers;

import java.util.List;

import com.lms.backend.models.Course;
import com.lms.backend.services.CourseService;

import org.springframework.beans.factory.annotation.Autowired;
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

}
