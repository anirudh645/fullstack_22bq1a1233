package com.anirudh.flipr_backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileStorageService {

    @Value("${file.storage.location:uploads}")
    private String storageLocation;

    @PostConstruct
    public void init() throws IOException {
        Path path = Paths.get(storageLocation).toAbsolutePath().normalize();
        if (!Files.exists(path)) {
            Files.createDirectories(path);
        }
    }

    public String storeFile(MultipartFile file) throws IOException {
        if (file == null || file.isEmpty()) return null;
        String contentType = file.getContentType();
        if (contentType == null || !(contentType.equals("image/jpeg") || contentType.equals("image/png") || contentType.equals("image/jpg"))) {
            throw new IOException("Only JPEG and PNG images are supported");
        }
        String original = file.getOriginalFilename();
        String ext = "";
        if (original != null && original.contains(".")) {
            ext = original.substring(original.lastIndexOf('.'));
        }
        String filename = UUID.randomUUID().toString() + ext;
        Path target = Paths.get(storageLocation).resolve(filename).toAbsolutePath().normalize();
        Files.copy(file.getInputStream(), target);

        // Build a URL to access the file via /uploads/{filename}
        String baseUrl = ServletUriComponentsBuilder.fromCurrentContextPath().build().toUriString();
        return baseUrl + "/uploads/" + filename;
    }

    public boolean deleteFileByUrl(String fileUrl) {
        if (fileUrl == null) return false;
        int idx = fileUrl.lastIndexOf('/');
        if (idx < 0) return false;
        String filename = fileUrl.substring(idx + 1);
        Path target = Paths.get(storageLocation).resolve(filename).toAbsolutePath().normalize();
        File f = target.toFile();
        return f.exists() && f.delete();
    }
}
