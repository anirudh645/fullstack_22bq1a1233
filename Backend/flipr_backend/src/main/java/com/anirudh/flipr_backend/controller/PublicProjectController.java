package com.anirudh.flipr_backend.controller;

import com.anirudh.flipr_backend.model.Project;
import com.anirudh.flipr_backend.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotBlank;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@Validated
public class PublicProjectController {

    private final ProjectService projectService;

    public PublicProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public List<Project> list() {
        return projectService.listAll();
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<Project> create(@RequestParam @NotBlank String name,
                                          @RequestParam(required = false) String description,
                                          @RequestParam(required = false) MultipartFile image) throws IOException {
        Project p = projectService.create(name, description, image);
        return ResponseEntity.status(HttpStatus.CREATED).body(p);
    }
}
