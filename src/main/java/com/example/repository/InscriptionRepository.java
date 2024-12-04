package com.example.repository;

import com.example.model.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InscriptionRepository extends JpaRepository<Inscription, Long> {
    List<Inscription> findByUserId(Long userId);
    List<Inscription> findByCoursId(Long coursId);
}
