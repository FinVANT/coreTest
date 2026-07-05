package com.finvant.coreTest.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.Instant;

@RestController
@RequestMapping("/api/v1")
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<Object> checkHealth() {
        return ResponseEntity.ok().body(Map.of("status", "OK", "timestamp", Instant.now().toEpochMilli()));
    }
}
