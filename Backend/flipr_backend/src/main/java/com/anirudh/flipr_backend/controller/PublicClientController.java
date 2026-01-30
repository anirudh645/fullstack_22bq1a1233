package com.anirudh.flipr_backend.controller;

import com.anirudh.flipr_backend.model.Client;
import com.anirudh.flipr_backend.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotBlank;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/clients")
@Validated
public class PublicClientController {

    private final ClientService clientService;

    public PublicClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<Client> list() {
        return clientService.listAll();
    }

    @PostMapping(consumes = {"multipart/form-data"})
    public ResponseEntity<Client> create(@RequestParam @NotBlank String name,
                                         @RequestParam(required = false) String designation,
                                         @RequestParam(required = false) String description,
                                         @RequestParam(required = false) MultipartFile image) throws IOException {
        Client c = clientService.create(name, designation, description, image);
        return ResponseEntity.status(HttpStatus.CREATED).body(c);
    }
}
