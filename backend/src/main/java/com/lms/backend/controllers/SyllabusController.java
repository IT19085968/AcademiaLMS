package com.lms.backend.controllers;

import java.util.List;

import com.lms.backend.models.Syllabus;
import com.lms.backend.services.SyllabusService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/syllabus")
@CrossOrigin
public class SyllabusController {

    private final SyllabusService syllabusService;

    @Autowired
    public SyllabusController(SyllabusService syllabusService) {
        this.syllabusService = syllabusService;
    }

    @GetMapping("/")
    public List<Syllabus> getSyllabusList() {
        return syllabusService.getAllSyllabus();
    }

    @GetMapping("/{id}")
    public Syllabus getOneSyllabus(@PathVariable String id) {
        return syllabusService.getSyllabusById(id);
    }

    @PostMapping("/")
    public Syllabus addCourse(@RequestBody Syllabus syllabus) {
        return syllabusService.addNewSyllabus(syllabus);
    }

}
