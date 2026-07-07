package com.finvant.coreTest.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("/api/v1")
public class HealthCheckController {

    @GetMapping("/health")
    public ResponseEntity<HealthResponse> healthCheck() {
        long timestamp = Instant.now().toEpochMilli();
        HealthResponse response = new HealthResponse("OK", timestamp);
        return ResponseEntity.ok(response);
    }

    public static class HealthResponse {
        private String status;
        private long timestamp;

        public HealthResponse(String status, long timestamp) {
            this.status = status;
            this.timestamp = timestamp;
        }

        public String getStatus() {
            return status;
        }

        public long getTimestamp() {
            return timestamp;
        }
    }
}