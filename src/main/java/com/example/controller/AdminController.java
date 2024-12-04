package com.example.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/dashboard")
    public ResponseEntity<String> getDashboardData() {
        // Logique pour récupérer des statistiques d'administration
        return ResponseEntity.ok("Données de tableau de bord.");
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        // Logique pour supprimer un utilisateur
        return ResponseEntity.ok("Utilisateur supprimé avec succès!");
    }
}
