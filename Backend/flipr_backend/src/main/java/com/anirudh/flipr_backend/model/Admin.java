package com.anirudh.flipr_backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "admins")
public class Admin {
    
    @Id
    private String id;
    
    @Indexed(unique = true)
    private String username;
    
    private String password; // Stored as BCrypt hash
    
    private String email;
    
    private String role; // e.g., "ADMIN", "SUPER_ADMIN"
    
    private boolean active = true;
    
    private LocalDateTime createdAt = LocalDateTime.now();
    
    private LocalDateTime lastLoginAt;
}
