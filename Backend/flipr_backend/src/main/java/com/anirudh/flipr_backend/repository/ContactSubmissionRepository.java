package com.anirudh.flipr_backend.repository;

import com.anirudh.flipr_backend.model.ContactSubmission;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactSubmissionRepository extends MongoRepository<ContactSubmission, String> {
}
