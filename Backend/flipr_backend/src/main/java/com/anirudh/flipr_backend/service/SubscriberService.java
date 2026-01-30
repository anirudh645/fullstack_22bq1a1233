package com.anirudh.flipr_backend.service;

import com.anirudh.flipr_backend.model.Subscriber;
import com.anirudh.flipr_backend.repository.SubscriberRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriberService {

    private final SubscriberRepository repository;

    public SubscriberService(SubscriberRepository repository) {
        this.repository = repository;
    }

    public Subscriber subscribe(String email) {
        return repository.findByEmail(email).orElseGet(() -> {
            Subscriber s = new Subscriber();
            s.setEmail(email);
            return repository.save(s);
        });
    }

    public List<Subscriber> listAll() {
        return repository.findAll();
    }
}
