package com.finvant.core.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseStatus;

@RestController
public class HealthController {

    @GetMapping("/api/health")
    @ResponseStatus(HttpStatus.OK)
    public HealthStatus health() {
        return new HealthStatus("UP");
    }

    static class HealthStatus {
        private final String status;

        public HealthStatus(String status) {
            this.status = status;
        }

        public String getStatus() {
            return status;
        }
    }
}
