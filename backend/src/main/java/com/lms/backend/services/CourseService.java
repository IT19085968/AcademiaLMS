package com.lms.backend.services;

import java.util.List;

import com.lms.backend.models.Course;
import com.lms.backend.repositories.CourseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();

    }

    public Course getCourseById(String id) {
        return courseRepository.findById(id).orElse(null);

    }

    public void addNewCourse(Course course) {
        courseRepository.save(course);
    }

}
