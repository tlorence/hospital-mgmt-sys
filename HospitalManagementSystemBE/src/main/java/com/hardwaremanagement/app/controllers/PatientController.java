package com.hardwaremanagement.app.controllers;

import com.hardwaremanagement.app.models.Doctor;
import com.hardwaremanagement.app.models.Patient;
import com.hardwaremanagement.app.repositories.DoctorRepository;
import com.hardwaremanagement.app.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("add")
    public String addPatient(@RequestBody Patient patient){
        patientRepository.save(patient);
        return "Added Successfully";
    }

    @GetMapping("getAll")
    public List<Patient> getAllPatient(){
        return patientRepository.findAll();
    }

    @GetMapping("getById")
    public Optional<Patient> getPatient(@PathVariable String id){
        return patientRepository.findById(id);
    }

    @PutMapping("update")
    public String updatePatient(@RequestBody Patient patient){
        patientRepository.save(patient);
        return "Updated Successfully";
    }

    @DeleteMapping("delete")
    public String deletePatient(@PathVariable String id){
        patientRepository.deleteById(id);
        return "Deleted Successfully";
    }
}
