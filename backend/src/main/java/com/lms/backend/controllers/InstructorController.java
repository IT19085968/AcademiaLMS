package com.lms.backend.controllers;

import com.lms.backend.models.Instructor;
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
    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
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
}
