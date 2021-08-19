package com.lms.backend.controllers;

import com.lms.backend.dto.LecturerSuggestionResponse;
import com.lms.backend.models.Course;
import com.lms.backend.models.Lecturer;
import com.lms.backend.services.LecturerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/lecturer")
public class LecturerController {

    @Autowired
    private LecturerService lecturerService;

    @Autowired(required=true)
    private ModelMapper modelMapper;

    @PostMapping("/")
    public void addCourse(@RequestBody Lecturer lecturer) {
        lecturerService.addNewLecturer(lecturer);
    }

    @GetMapping("/suggestion")
    public ResponseEntity<List<LecturerSuggestionResponse>> getAdminList(){
        List<Lecturer> adminList = lecturerService.getLecturerList();
        List<LecturerSuggestionResponse> adminSuggestionResponses = adminList.stream().map(admin -> modelMapper.map(admin, LecturerSuggestionResponse.class)).collect(Collectors.toList());
        return new ResponseEntity<>(adminSuggestionResponses, HttpStatus.OK);
    }

}
