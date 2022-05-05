package com.hardwaremanagement.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "attendant")
public class Attendant {

    @Id
    private String attendantId;
    private String firstName;
    private String lastName;
    private String workingWard;
    private String contactNo;

    public Attendant(String attendantId, String firstName, String lastName, String workingWard, String contactNo) {
        this.attendantId = attendantId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.workingWard = workingWard;
        this.contactNo = contactNo;
    }

    public String getAttendantId() {
        return attendantId;
    }

    public void setAttendantId(String attendantId) {
        this.attendantId = attendantId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getWorkingWard() {
        return workingWard;
    }

    public void setWorkingWard(String workingWard) {
        this.workingWard = workingWard;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }
}
