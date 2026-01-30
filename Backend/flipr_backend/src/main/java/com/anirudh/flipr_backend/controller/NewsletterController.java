package com.anirudh.flipr_backend.controller;

import com.anirudh.flipr_backend.model.Subscriber;
import com.anirudh.flipr_backend.service.SubscriberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.util.List;

@RestController
@RequestMapping("/api/newsletter")
@Validated
public class NewsletterController {

    private final SubscriberService subscriberService;

    public NewsletterController(SubscriberService subscriberService) {
        this.subscriberService = subscriberService;
    }

    public static class SubscribeRequest {
        @NotBlank
        @Email
        public String email;
    }

    @PostMapping("/subscribe")
    public ResponseEntity<Subscriber> subscribe(@Valid @RequestBody SubscribeRequest req) {
        Subscriber s = subscriberService.subscribe(req.email);
        return ResponseEntity.status(HttpStatus.CREATED).body(s);
    }

    @GetMapping("/subscribers")
    public List<Subscriber> listAll() {
        return subscriberService.listAll();
    }
}
