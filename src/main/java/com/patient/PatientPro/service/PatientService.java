package com.patient.PatientPro.service;

import java.util.List;

import com.patient.PatientPro.entity.Patient;

public interface PatientService {

    Patient addPatient(Patient patient);

    List<Patient> getAllPatients();

    Patient getPatientById(Long id);

    Patient updatePatient(Long id, Patient patient);

    void deletePatient(Long id);
    List<Patient> searchPatients(String keyword);
}