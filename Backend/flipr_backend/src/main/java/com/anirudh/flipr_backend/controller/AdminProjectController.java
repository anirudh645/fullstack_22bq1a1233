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
@RequestMapping("/api/admin/projects")
@Validated
public class AdminProjectController {

    private final ProjectService projectService;

    public AdminProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public List<Project> list() {
        return projectService.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Project> get(@PathVariable String id) {
        return projectService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<Project> create(@RequestParam @NotBlank String name,
                                          @RequestParam(required = false) String description,
                                          @RequestParam(required = false) MultipartFile image) throws IOException {
        Project p = projectService.create(name, description, image);
        return ResponseEntity.status(HttpStatus.CREATED).body(p);
    }

    @PutMapping(value = "/{id}", consumes = {"multipart/form-data"})
    public ResponseEntity<Project> update(@PathVariable String id,
                                          @RequestParam(required = false) String name,
                                          @RequestParam(required = false) String description,
                                          @RequestParam(required = false) MultipartFile image) throws IOException {
        try {
            Project p = projectService.update(id, name, description, image);
            return ResponseEntity.ok(p);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        try {
            projectService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
