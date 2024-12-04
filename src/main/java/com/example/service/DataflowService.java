package com.example.service;

import com.example.model.Cours;
import com.example.repository.CoursRepository;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class DataflowService {

    private static final Logger logger = LoggerFactory.getLogger(DataflowService.class);

    @Autowired
    private CoursRepository coursRepository;

    @Transactional
    public String processCsvData() {
        String filePath = "/home/tsinjo/Music/backendetech/target/classes/data/cours.csv";
        String line;
        String splitBy = ",";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            br.readLine(); // Sauter la première ligne (entêtes)
            while ((line = br.readLine()) != null) {
                try {
                    String[] courseData = line.split(splitBy);
                    LocalDate dateDebut = LocalDate.parse(courseData[3], formatter);
                    LocalDate dateFin = LocalDate.parse(courseData[4], formatter);

                    Cours cours = new Cours(
                            courseData[1],
                            courseData[2],
                            dateDebut,
                            dateFin,
                            Integer.parseInt(courseData[5])
                    );

                    coursRepository.save(cours);
                    logger.info("Cours ajouté: " + cours.getNomCours());
                } catch (Exception e) {
                    logger.error("Erreur lors de l'insertion du cours: " + line, e);
                }
            }
        } catch (IOException e) {
            logger.error("Erreur lors du traitement du fichier", e);
            return "Erreur lors du traitement du fichier.";
        }
        logger.info("Données traitées et enregistrées avec succès.");
        return "Données traitées et enregistrées avec succès.";
    }

}
