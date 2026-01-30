package com.anirudh.flipr_backend.controller;

import com.anirudh.flipr_backend.model.ContactSubmission;
import com.anirudh.flipr_backend.service.ContactService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@Validated
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    public static class ContactRequest {
        @NotBlank
        public String fullName;

        @NotBlank
        @Email
        public String email;

        @NotBlank
        public String mobileNumber;

        public String city;
    }

    @PostMapping
    public ResponseEntity<ContactSubmission> submit(@Valid @RequestBody ContactRequest req) {
        ContactSubmission cs = new ContactSubmission();
        cs.setFullName(req.fullName);
        cs.setEmail(req.email);
        cs.setMobileNumber(req.mobileNumber);
        cs.setCity(req.city);
        ContactSubmission saved = contactService.save(cs);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @GetMapping
    public List<ContactSubmission> listAll() {
        return contactService.listAll();
    }
}
