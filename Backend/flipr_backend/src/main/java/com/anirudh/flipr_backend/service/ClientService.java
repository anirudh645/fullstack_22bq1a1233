package com.anirudh.flipr_backend.service;

import com.anirudh.flipr_backend.model.Client;
import com.anirudh.flipr_backend.repository.ClientRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ClientService {

    private final ClientRepository clientRepository;
    private final FileStorageService fileStorageService;

    public ClientService(ClientRepository clientRepository, FileStorageService fileStorageService) {
        this.clientRepository = clientRepository;
        this.fileStorageService = fileStorageService;
    }

    public List<Client> listAll() {
        return clientRepository.findAll();
    }

    public Client getById(String id) {
        return clientRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Client not found"));
    }

    public Client create(String name, String designation, String description, MultipartFile image) throws IOException {
        Client c = new Client();
        c.setName(name);
        c.setDesignation(designation);
        c.setDescription(description);
        if (image != null && !image.isEmpty()) {
            String url = fileStorageService.storeFile(image);
            c.setImageUrl(url);
        }
        return clientRepository.save(c);
    }

    public Client update(String id, String name, String designation, String description, MultipartFile image) throws IOException {
        Client c = clientRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Client not found"));
        if (name != null) c.setName(name);
        if (designation != null) c.setDesignation(designation);
        if (description != null) c.setDescription(description);
        if (image != null && !image.isEmpty()) {
            if (c.getImageUrl() != null) fileStorageService.deleteFileByUrl(c.getImageUrl());
            String url = fileStorageService.storeFile(image);
            c.setImageUrl(url);
        }
        return clientRepository.save(c);
    }

    public void delete(String id) {
        Client c = clientRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Client not found"));
        if (c.getImageUrl() != null) fileStorageService.deleteFileByUrl(c.getImageUrl());
        clientRepository.deleteById(id);
    }
}
