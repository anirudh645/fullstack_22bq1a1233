package com.anirudh.flipr_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class MongoConfig {

    @Bean
    public com.mongodb.client.MongoClient mongoClient(Environment env) {
        String uri = env.getProperty("MONGODB_URI");
        if (uri == null || uri.isBlank()) {
            uri = env.getProperty("spring.data.mongodb.uri");
        }
        if (uri == null || uri.isBlank()) {
            // fallback to default local (driver will use default settings)
            return com.mongodb.client.MongoClients.create();
        }
        System.out.println("Creating MongoClient with URI: " + (uri.length() > 50 ? uri.substring(0, 50) + "..." : uri));
        return com.mongodb.client.MongoClients.create(uri);
    }
}
