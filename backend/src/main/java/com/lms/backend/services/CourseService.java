package com.lms.backend.services;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import com.lms.backend.models.Course;
import com.lms.backend.models.Lecturer;
import com.lms.backend.repositories.CourseRepository;

import com.lms.backend.repositories.LecturerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Autowired
    private  LecturerRepository lecturerRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();

    }

    public Course getCourseById(String id) {
        return courseRepository.findById(id).orElse(null);

    }


    public Course addNewCourse(Course course) throws Exception{

        List<Lecturer> list = course.getLecturers().stream().map(lecturer ->
                lecturerRepository.findById(lecturer.getId()).get()
        ).collect(Collectors.toList());

        course.setLecturers(new HashSet<>(list));

        return courseRepository.save(course);
    }



    public void deleteCourse(String id){
        boolean exists= courseRepository.existsById(id);
        if(!exists){
            throw  new IllegalStateException("Course with id "+id+" does not exists");
        }

        courseRepository.deleteById(id);
    }

}
