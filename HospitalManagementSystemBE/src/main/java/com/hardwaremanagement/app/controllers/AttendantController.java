package com.hardwaremanagement.app.controllers;

import com.hardwaremanagement.app.models.Attendant;
import com.hardwaremanagement.app.repositories.AttendantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/attendant")
public class AttendantController {

    @Autowired
    private AttendantRepository attendantRepository;

    @PostMapping("add")
    public String addAttendant(@RequestBody Attendant attendant){
        attendantRepository.save(attendant);
        return "Added Successfully";
    }

    @GetMapping("getAll")
    public List<Attendant> getAllAttendant(){
        return attendantRepository.findAll();
    }

    @GetMapping("getById")
    public Optional<Attendant> getAttendant(@PathVariable String id){
        return attendantRepository.findById(id);
    }

    @PutMapping("update")
    public String updateAttendant(@RequestBody Attendant attendant){
        attendantRepository.save(attendant);
        return "Updated Successfully";
    }

    @DeleteMapping("delete")
    public String deleteAttendant(@PathVariable String id){
        attendantRepository.deleteById(id);
        return "Deleted Successfully";
    }
}
