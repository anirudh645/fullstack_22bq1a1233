package com.anirudh.flipr_backend.controller;

import com.anirudh.flipr_backend.dto.AuthResponse;
import com.anirudh.flipr_backend.dto.LoginRequest;
import com.anirudh.flipr_backend.model.Admin;
import com.anirudh.flipr_backend.security.JwtUtil;
import com.anirudh.flipr_backend.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final AdminService adminService;
    private final JwtUtil jwtUtil;
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Optional<Admin> adminOpt = adminService.findByUsername(loginRequest.getUsername());
            
            if (adminOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new AuthResponse(null, null, null, null, "Invalid username or password"));
            }
            
            Admin admin = adminOpt.get();
            
            if (!admin.isActive()) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(new AuthResponse(null, null, null, null, "Account is deactivated"));
            }
            
            if (!adminService.verifyPassword(loginRequest.getPassword(), admin.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new AuthResponse(null, null, null, null, "Invalid username or password"));
            }
            
            // Generate JWT token
            String token = jwtUtil.generateToken(admin.getUsername(), admin.getRole());
            
            // Update last login
            adminService.updateLastLogin(admin.getUsername());
            
            AuthResponse response = new AuthResponse(
                token,
                admin.getUsername(),
                admin.getEmail(),
                admin.getRole(),
                "Login successful"
            );
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new AuthResponse(null, null, null, null, "Login failed: " + e.getMessage()));
        }
    }
    
    @GetMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestHeader("Authorization") String authHeader) {
        try {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid token format");
            }
            
            String token = authHeader.substring(7);
            
            if (jwtUtil.validateToken(token)) {
                String username = jwtUtil.extractUsername(token);
                String role = jwtUtil.extractRole(token);
                
                return ResponseEntity.ok(new AuthResponse(
                    token,
                    username,
                    null,
                    role,
                    "Token is valid"
                ));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid or expired token");
            }
            
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Token validation failed");
        }
    }
}
