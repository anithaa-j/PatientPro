package com.patient.PatientPro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.patient.PatientPro.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    @Query("""
        SELECT p FROM Patient p
        WHERE LOWER(p.patientName) LIKE LOWER(CONCAT('%', :keyword, '%'))
           OR LOWER(p.patientId) LIKE LOWER(CONCAT('%', :keyword, '%'))
           OR LOWER(p.phoneNumber) LIKE LOWER(CONCAT('%', :keyword, '%'))
    """)
    List<Patient> searchPatients(@Param("keyword") String keyword);

}