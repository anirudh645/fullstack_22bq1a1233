package com.anirudh.flipr_backend.service;

import com.anirudh.flipr_backend.model.ContactSubmission;
import com.anirudh.flipr_backend.repository.ContactSubmissionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    private final ContactSubmissionRepository repository;

    public ContactService(ContactSubmissionRepository repository) {
        this.repository = repository;
    }

    public ContactSubmission save(ContactSubmission submission) {
        return repository.save(submission);
    }

    public List<ContactSubmission> listAll() {
        return repository.findAll();
    }
}
