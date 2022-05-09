package com.hardwaremanagement.app.controllers;

import com.hardwaremanagement.app.models.Doctor;
import com.hardwaremanagement.app.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired
    private DoctorRepository doctorRepository;

    @PostMapping("add")
    public String addDoctor(@RequestBody Doctor doctor){
        doctorRepository.save(doctor);
        return "Added Successfully";
    }

    @GetMapping("getAll")
    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    @GetMapping("getById")
    public Optional<Doctor> getDoctor(@PathVariable String id){
        return doctorRepository.findById(id);
    }

    @PutMapping("update")
    public String updateDoctor(@RequestBody Doctor doctor){
        doctorRepository.save(doctor);
        return "Updated Successfully";
    }

    @DeleteMapping("delete")
    public String deleteDoctor(@PathVariable String id){
        doctorRepository.deleteById(id);
        return "Deleted Successfully";
    }
}
