package com.example.controller;

import com.example.service.DataflowService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dataflow")
public class DataflowController {

    private static final Logger logger = LoggerFactory.getLogger(DataflowController.class);

    @Autowired
    private DataflowService dataflowService;

    @PostMapping("/import")
    public ResponseEntity<String> importCsvData() {
        try {
            String result = dataflowService.processCsvData();
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            logger.error("Erreur lors de l'importation des données CSV", e);
            return ResponseEntity.status(500).body("Erreur lors de l'importation des données CSV.");
        }
    }
}
