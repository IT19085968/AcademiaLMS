package com.lms.backend.controllers;

import java.util.List;
import java.util.stream.Collectors;

import com.lms.backend.dto.CourseCreateRequest;
import com.lms.backend.dto.CourseCreateResponse;
import com.lms.backend.dto.CourseSuggestionResponse;
// import com.lms.backend.dto.LecturerSuggestionResponse;
import com.lms.backend.dto.CourseUpdateResponse;
import com.lms.backend.models.Course;
// import com.lms.backend.models.Lecturer;
import com.lms.backend.repositories.CourseRepository;
import com.lms.backend.services.CourseService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/courses")
@CrossOrigin
public class CourseController {

    private final CourseService courseService;

    @Autowired
    private final CourseRepository courseRepository;

    @Autowired(required = true)
    private ModelMapper modelMapper;

    @Autowired
    public CourseController(CourseService courseService, CourseRepository courseRepository) {
        this.courseService = courseService;
        this.courseRepository = courseRepository;
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
    public ResponseEntity<Object> saveCourse(@Validated @RequestBody CourseCreateRequest request) throws Exception {
        Course course = modelMapper.map(request, Course.class);
        Course saveCourse = courseService.addNewCourse(course);
        CourseCreateResponse courseCreateResponse = modelMapper.map(saveCourse, CourseCreateResponse.class);
        return new ResponseEntity<>(courseCreateResponse, HttpStatus.CREATED);
    }

    @GetMapping("/suggestion")
    public ResponseEntity<List<CourseSuggestionResponse>> getAdminList() {
        List<Course> courseList = courseService.getAllCourses();
        List<CourseSuggestionResponse> courseSuggestionResponses = courseList.stream()
                .map(course -> modelMapper.map(course, CourseSuggestionResponse.class)).collect(Collectors.toList());
        return new ResponseEntity<>(courseSuggestionResponses, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable("id") String id) {
        courseService.deleteCourse(id);
    }

    @PutMapping("/")
    public Course update(@RequestBody Course course)  {
//        Course course = modelMapper.map(request, Course.class);
//        course.setId(id);
//        Course courseUpdate = courseService.update(course);
//        CourseUpdateResponse courseUpdateResponse = modelMapper.map(courseUpdate, CourseUpdateResponse.class);
//        return new ResponseEntity<>(courseUpdateResponse, HttpStatus.OK);

        Course oldCourse = courseRepository.findById(course.getId()).orElse(null);
        oldCourse.setName(course.getName());
        oldCourse.setDescription(course.getDescription());
        oldCourse.setDuration(course.getDuration());
        courseRepository.save(oldCourse);
        return oldCourse;
    }

}
