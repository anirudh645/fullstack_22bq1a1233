package com.anirudh.flipr_backend.config;

import com.anirudh.flipr_backend.model.Admin;
import com.anirudh.flipr_backend.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {
    
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Bean
    public CommandLineRunner initData() {
        return args -> {
            // Check if admin already exists
            if (!adminRepository.existsByUsername("admin")) {
                Admin admin = new Admin();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("admin123"));
                admin.setEmail("admin@flipr.com");
                admin.setRole("ADMIN");
                admin.setActive(true);
                admin.setCreatedAt(LocalDateTime.now());
                
                adminRepository.save(admin);
                System.out.println("✅ Demo admin user created!");
                System.out.println("   Username: admin");
                System.out.println("   Password: admin123");
            } else {
                System.out.println("ℹ️  Admin user already exists");
            }
        };
    }
}
