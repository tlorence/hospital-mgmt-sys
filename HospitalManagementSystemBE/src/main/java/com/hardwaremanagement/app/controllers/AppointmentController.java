package com.hardwaremanagement.app.controllers;

import com.hardwaremanagement.app.models.Ambulance;
import com.hardwaremanagement.app.models.Appointment;
import com.hardwaremanagement.app.repositories.AmbulanceRepository;
import com.hardwaremanagement.app.repositories.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @PostMapping("add")
    public String addAppointment(@RequestBody Appointment appointment){
        appointmentRepository.save(appointment);
        return "Added Successfully";
    }

    @GetMapping("getAll")
    public List<Appointment> getAllAppointment(){
        return appointmentRepository.findAll();
    }

    @GetMapping("getById")
    public Optional<Appointment> getAppointment(@PathVariable String id){
        return appointmentRepository.findById(id);
    }

    @PutMapping("update")
    public String updateAppointment(@RequestBody Appointment appointment){
        appointmentRepository.save(appointment);
        return "Updated Successfully";
    }

    @DeleteMapping("delete")
    public String deleteAppointment(@PathVariable String id){
        appointmentRepository.deleteById(id);
        return "Deleted Successfully";
    }
}
