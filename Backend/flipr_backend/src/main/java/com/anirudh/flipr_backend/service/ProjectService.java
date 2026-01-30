package com.anirudh.flipr_backend.service;

import com.anirudh.flipr_backend.model.Project;
import com.anirudh.flipr_backend.repository.ProjectRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final FileStorageService fileStorageService;

    public ProjectService(ProjectRepository projectRepository, FileStorageService fileStorageService) {
        this.projectRepository = projectRepository;
        this.fileStorageService = fileStorageService;
    }

    public List<Project> listAll() {
        return projectRepository.findAll();
    }

    public Optional<Project> getById(String id) {
        return projectRepository.findById(id);
    }

    public Project create(String name, String description, MultipartFile image) throws IOException {
        Project p = new Project();
        p.setName(name);
        p.setDescription(description);
        if (image != null && !image.isEmpty()) {
            String url = fileStorageService.storeFile(image);
            p.setImageUrl(url);
        }
        return projectRepository.save(p);
    }

    public Project update(String id, String name, String description, MultipartFile image) throws IOException {
        Project p = projectRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Project not found"));
        if (name != null) p.setName(name);
        if (description != null) p.setDescription(description);
        if (image != null && !image.isEmpty()) {
            // delete previous image if present
            if (p.getImageUrl() != null) {
                fileStorageService.deleteFileByUrl(p.getImageUrl());
            }
            String url = fileStorageService.storeFile(image);
            p.setImageUrl(url);
        }
        return projectRepository.save(p);
    }

    public void delete(String id) {
        Project p = projectRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Project not found"));
        if (p.getImageUrl() != null) {
            fileStorageService.deleteFileByUrl(p.getImageUrl());
        }
        projectRepository.deleteById(id);
    }
}
