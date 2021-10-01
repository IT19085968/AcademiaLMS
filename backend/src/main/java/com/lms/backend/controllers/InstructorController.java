package com.lms.backend.controllers;

import com.lms.backend.models.Instructor;
import com.lms.backend.repositories.InstructorRepository;
import com.lms.backend.services.InstructorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/instructors")
@CrossOrigin
public class InstructorController {

    private final InstructorService instructorService;

    @Autowired
    private final InstructorRepository instructorRepository;

    @Autowired
    public InstructorController(InstructorService instructorService, InstructorRepository instructorRepository) {
        this.instructorService = instructorService;
        this.instructorRepository = instructorRepository;
    }

    @GetMapping("/")
    public List<Instructor> getInstructorsList() {
        return instructorService.getAllInstructors();
    }

    @GetMapping("/{id}")
    public Instructor getOneInstructor(@PathVariable String id) {
        return instructorService.getInstructorById(id);
    }

    @PostMapping("/")
    public Instructor addInstructor(@RequestBody Instructor instructor) {
        return instructorService.addNewInstructor(instructor);
    }

    @DeleteMapping("/{id}")
    public void deleteInstructor(@PathVariable("id")String id){
        instructorService.deleteInstructor(id);
    }

    @PutMapping("/")
    public Instructor update(@RequestBody Instructor instructor)  {
//        Course course = modelMapper.map(request, Course.class);
//        course.setId(id);
//        Course courseUpdate = courseService.update(course);
//        CourseUpdateResponse courseUpdateResponse = modelMapper.map(courseUpdate, CourseUpdateResponse.class);
//        return new ResponseEntity<>(courseUpdateResponse, HttpStatus.OK);

        Instructor oldCourse = instructorRepository.findById(instructor.getId()).orElse(null);
        oldCourse.setName(instructor.getName());
        oldCourse.setEmail(instructor.getEmail());
        oldCourse.setContactNumber(instructor.getContactNumber());
        instructorRepository.save(oldCourse);
        return oldCourse;
    }

}
