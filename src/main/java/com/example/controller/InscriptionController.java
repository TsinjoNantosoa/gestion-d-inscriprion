package com.example.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/inscription")
public class InscriptionController {

    @PostMapping
    public ResponseEntity<String> inscrire(@RequestParam Long userId, @RequestParam Long coursId) {
        // Logique pour inscrire un utilisateur à un cours
        return ResponseEntity.ok("Inscription réussie pour l'utilisateur " + userId + " au cours " + coursId);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<String> getUserInscriptions(@PathVariable Long userId) {
        // Logique pour récupérer les inscriptions d'un utilisateur
        return ResponseEntity.ok("Liste des cours inscrits pour l'utilisateur " + userId);
    }
}
