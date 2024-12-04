package com.example.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cours")
public class CoursController {

    @GetMapping
    public ResponseEntity<String> getAllCours() {
        // Logique pour récupérer tous les cours
        return ResponseEntity.ok("Liste de tous les cours.");
    }

    @PostMapping
    public ResponseEntity<String> createCours(@RequestParam String titre) {
        // Logique pour créer un cours
        return ResponseEntity.ok("Cours créé avec succès: " + titre);
    }
}
