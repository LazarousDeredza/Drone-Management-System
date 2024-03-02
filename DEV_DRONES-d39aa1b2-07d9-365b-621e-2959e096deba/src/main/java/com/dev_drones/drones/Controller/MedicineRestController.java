package com.dev_drones.drones.Controller;

import com.dev_drones.drones.Config.message.ResponseMessage;
import com.dev_drones.drones.Models.Drone;
import com.dev_drones.drones.Models.Medication;
import com.dev_drones.drones.Service.DocumentService;
import com.dev_drones.drones.Service.DroneService;
import com.dev_drones.drones.Service.MedicineService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

@RestController

public class MedicineRestController {


    @Autowired
    private DocumentService documentService;
    @Autowired
    private MedicineService medicineService;


    ObjectMapper objectmapper = new ObjectMapper();


    @RequestMapping(value = "/getMedications", method = RequestMethod.GET)
    public List<Medication> getDrones() {


        return medicineService.findAll();
    }


    //get product by id
    @RequestMapping(value = "/getMedication/{id}", method = RequestMethod.GET)
    public Medication getProduct(@PathVariable Long id) {
        return medicineService.findById(id);
    }


    @RequestMapping(value = "/saveMedication", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public ResponseEntity<ResponseMessage> saveMedication(
            @RequestParam(required = true, value = "jsonData") String jsonData,
            @RequestParam(required = true, value = "medicine_image") MultipartFile imageData

    ) throws IOException {


        Medication medication = this.objectmapper.readValue(jsonData, Medication.class);
        medication.setImage(Objects.requireNonNull(imageData.getOriginalFilename()).replaceAll(" ", "_"));
        medicineService.saveMedication(medication);
        Long ID = medication.getId();
        System.out.println("ID: " + ID);
        String message = "";

        try {
            this.documentService.store(imageData, "medication", ID);

            message = "Medication Saved successfully : ";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception var8) {
            message = "Could not upload the image";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }


    }

    //update product
    @RequestMapping(value = "/updateMedicine/{id}", method = RequestMethod.PUT)
    public Medication updateMedicine(@RequestBody Medication medication, @PathVariable Long id) {
        return medicineService.updateMedication(medication, id);
    }


}
