package com.anirudh.flipr_backend.service;

import com.anirudh.flipr_backend.model.Admin;
import com.anirudh.flipr_backend.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {
    
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    
    public Admin createAdmin(Admin admin) {
        if (adminRepository.existsByUsername(admin.getUsername())) {
            throw new IllegalArgumentException("Username already exists");
        }
        if (adminRepository.existsByEmail(admin.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        
        // Hash the password
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setCreatedAt(LocalDateTime.now());
        
        return adminRepository.save(admin);
    }
    
    public Optional<Admin> findByUsername(String username) {
        return adminRepository.findByUsername(username);
    }
    
    public void updateLastLogin(String username) {
        adminRepository.findByUsername(username).ifPresent(admin -> {
            admin.setLastLoginAt(LocalDateTime.now());
            adminRepository.save(admin);
        });
    }
    
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }
    
    public boolean verifyPassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
}
