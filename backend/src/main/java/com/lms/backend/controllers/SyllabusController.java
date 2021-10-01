package com.lms.backend.controllers;

import java.util.List;

import com.lms.backend.models.Syllabus;
import com.lms.backend.repositories.SyllabusRepository;
import com.lms.backend.services.SyllabusService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/syllabus")
@CrossOrigin
public class SyllabusController {

    private final SyllabusService syllabusService;
    private final SyllabusRepository syllabusRepository;

    @Autowired
    public SyllabusController(SyllabusService syllabusService, SyllabusRepository syllabusRepository) {
        this.syllabusService = syllabusService;
        this.syllabusRepository = syllabusRepository;
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

    @DeleteMapping("/{id}")
    public void deleteSyllabus(@PathVariable("id")String id){
        syllabusRepository.deleteById(id);
    }

    @PutMapping("/")
    public Syllabus PutMapping(@RequestBody Syllabus syllabus) {
        // TODO: process PUT request
        Syllabus oldSyllabus = syllabusRepository.findById(syllabus.getId()).orElse(null);
        oldSyllabus.setCourseName(syllabus.getCourseName());
        oldSyllabus.setInstructorName(syllabus.getInstructorName());
        oldSyllabus.setNumberOfLessons(syllabus.getNumberOfLessons());
        syllabusRepository.save(oldSyllabus);
        return oldSyllabus;

    }

}
