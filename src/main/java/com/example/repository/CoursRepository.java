package com.example.repository;

import com.example.model.Cours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoursRepository extends JpaRepository<Cours, Long> {
    // Méthodes spécifiques pour rechercher des cours si nécessaire
}
