package com.example.service;

import com.example.model.Inscription;
import com.example.repository.InscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InscriptionService {

    @Autowired
    private InscriptionRepository inscriptionRepository;

    public List<Inscription> getAllInscriptions() {
        return inscriptionRepository.findAll();
    }

    public List<Inscription> getInscriptionsByUserId(Long userId) {
        return inscriptionRepository.findByUserId(userId);
    }

    public List<Inscription> getInscriptionsByCoursId(Long coursId) {
        return inscriptionRepository.findByCoursId(coursId);
    }

    public Inscription saveInscription(Inscription inscription) {
        return inscriptionRepository.save(inscription);
    }

    public void deleteInscription(Long id) {
        inscriptionRepository.deleteById(id);
    }
}
