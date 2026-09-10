package com.patient.PatientPro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.patient.PatientPro.entity.Patient;
import com.patient.PatientPro.repository.PatientRepository;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    // ==========================
    // Add Patient
    // ==========================
    @Override
    public Patient addPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    // ==========================
    // Get All Patients
    // ==========================
    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // ==========================
    // Get Patient By ID
    // ==========================
    @Override
    public Patient getPatientById(Long id) {
        return patientRepository.findById(id).orElse(null);
    }

    // ==========================
    // Update Patient
    // ==========================
    @Override
    public Patient updatePatient(Long id, Patient patient) {

        Patient existingPatient = patientRepository.findById(id).orElse(null);

        if (existingPatient != null) {

            existingPatient.setPatientId(patient.getPatientId());
            existingPatient.setPatientName(patient.getPatientName());
            existingPatient.setAge(patient.getAge());
            existingPatient.setGender(patient.getGender());
            existingPatient.setBloodGroup(patient.getBloodGroup());
            existingPatient.setPhoneNumber(patient.getPhoneNumber());
            existingPatient.setAddress(patient.getAddress());
            existingPatient.setDisease(patient.getDisease());
            existingPatient.setDoctorName(patient.getDoctorName());
            existingPatient.setAdmissionDate(patient.getAdmissionDate());
            existingPatient.setHeight(patient.getHeight());
            existingPatient.setWeight(patient.getWeight());
            existingPatient.setBloodPressure(patient.getBloodPressure());
            existingPatient.setAllergies(patient.getAllergies());
            existingPatient.setEmergencyContact(patient.getEmergencyContact());
            existingPatient.setStatus(patient.getStatus());

            return patientRepository.save(existingPatient);
        }

        return null;
    }

    // ==========================
    // Delete Patient
    // ==========================
    @Override
    public void deletePatient(Long id) {
        patientRepository.deleteById(id);
    }
    @Override
    public List<Patient> searchPatients(String keyword){

        return patientRepository.searchPatients(keyword);

    }
}