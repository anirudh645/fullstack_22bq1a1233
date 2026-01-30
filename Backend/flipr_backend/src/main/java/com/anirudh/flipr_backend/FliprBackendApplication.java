package com.anirudh.flipr_backend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FliprBackendApplication {

    public static void main(String[] args) {
        // Load .env from project root if present and set system properties used by Spring
        try {
            Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
            String mongoUri = dotenv.get("MONGODB_URI");
            if (mongoUri != null && !mongoUri.isBlank()) {
                // Set as system property so Spring Boot will prefer it over application.properties default
                System.setProperty("spring.data.mongodb.uri", mongoUri);
                // Also set the raw env-like property for any other code paths
                System.setProperty("MONGODB_URI", mongoUri);
                System.out.println("Loaded MONGODB_URI from .env and set system properties");
            }
        } catch (Exception e) {
            System.out.println("No .env loaded or error reading .env: " + e.getMessage());
        }

        SpringApplication.run(FliprBackendApplication.class, args);
    }

}
