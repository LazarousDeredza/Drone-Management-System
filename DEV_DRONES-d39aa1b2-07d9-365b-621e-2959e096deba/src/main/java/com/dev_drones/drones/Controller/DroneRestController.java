package com.dev_drones.drones.Controller;

import com.dev_drones.drones.Config.message.ResponseMessage;
import com.dev_drones.drones.Models.Drone;
import com.dev_drones.drones.Models.Medication;
import com.dev_drones.drones.Models.State;
import com.dev_drones.drones.Service.DocumentService;
import com.dev_drones.drones.Service.DroneService;
import com.dev_drones.drones.Service.MedicineService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController

public class DroneRestController {


    @Autowired
    private DocumentService documentService;
    @Autowired
    private DroneService droneService;
    @Autowired
    private MedicineService medicineService;


    ObjectMapper objectmapper = new ObjectMapper();


    @RequestMapping(value = "/getDrones", method = RequestMethod.GET)
    public List<Drone> getDrones() {
        return droneService.findAll();
    }


    //get product by id
    @RequestMapping(value = "/getDrone/{id}", method = RequestMethod.GET)
    public Drone getDrone(@PathVariable Long id) {
        return droneService.findById(id);
    }


    @RequestMapping(value = "/saveDrone", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public ResponseEntity<ResponseMessage> saveDrone(
            @RequestParam(required = true, value = "jsonData") String jsonData,
            @RequestParam(required = true, value = "drone_image") MultipartFile imageData) throws IOException {


        Drone drone = this.objectmapper.readValue(jsonData, Drone.class);
        drone.setImage(Objects.requireNonNull(imageData.getOriginalFilename()).replaceAll(" ", "_"));
        droneService.saveDrone(drone);
        Long ID = drone.getId();
        System.out.println("ID: " + ID);
        String message = "";

        try {
            this.documentService.store(imageData, "drone", ID);

            message = "Drone Saved successfully : ";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception var8) {
            message = "Could not upload the image";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }


    }

    //update product


    @RequestMapping(value = "/updateDrone/{id}", method = RequestMethod.PUT, consumes = {"multipart/form-data"})
    public ResponseEntity<ResponseMessage> updateDrone(
            @PathVariable Long id,
            @RequestParam(required = true, value = "jsonData") String jsonData,
            @RequestParam(required = false, value = "drone_image") MultipartFile imageData ,
            @RequestParam(required = true,value = "isNewImage") boolean isNewImage
            ) throws IOException {




        Drone drone = this.objectmapper.readValue(jsonData, Drone.class);

        System.out.println("Weight Limit = " + drone.getWeightLimit());
        if(isNewImage){
            drone.setImage(Objects.requireNonNull(imageData.getOriginalFilename()).replaceAll(" ", "_"));

        }
        droneService.updateDrone2(drone,id,isNewImage);

        System.out.println("ID: " + id);
        String message = "";

        try {

            if (isNewImage){
                documentService.store(imageData, "drone", id);

            }

            message = "Drone Updated successfully : ";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception var8) {
            message = "Could not upload the image";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }


    }

    @RequestMapping(value = "/update_drone/{id}", method = RequestMethod.PUT)
    public Drone updateDrone2(@RequestBody Drone drone, @PathVariable Long id) {


        return droneService.updateDrone(drone, id);
    }

    @RequestMapping(value = "/load/{id}", method = RequestMethod.PUT)
    public void finishPackaging( @PathVariable Long id) {
         droneService.finishPackaging( id);
    }

    @RequestMapping(value = "/loadDrone/{id}", method = RequestMethod.PUT)
    public ResponseEntity<ResponseMessage> loadDroneWithMedicine(@RequestBody List<Long> medicationIDs, @PathVariable Long id) {
        String message = "";
        int medicineTotalWeight = 0;

        Drone drone = droneService.findById(id);

        if (drone.getBatterCapacity() <= 25) {

            message = "Loading Failed : Drone Battery is too low !";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));

        } else if (drone.getState().equals(State.LOADED) || drone.getState().equals(State.DELIVERING)
                || drone.getState().equals(State.RETURNING) ) {

            message = "Loading Failed : The Drone you picked is already loaded or in transit, please pick an idle one ";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));

        }

        List<Medication> medications = new ArrayList<>();

        for (Long ID : medicationIDs) {
            Medication medication = medicineService.findById(ID);
            medications.add(medication);
            medicineTotalWeight += medication.getWeight();
        }

        if (medicineTotalWeight > drone.getWeightLimit()) {
            message = "Loading Failed : Your medicines have exceeded drone weight limit by : " + (medicineTotalWeight - drone.getWeightLimit()) + " g";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }

        drone.setMedicationsCarried(medications);
        drone.setState(State.LOADING);

        droneService.updateDrone(drone, id);


        message = "Loading Successful : The Drone is Loaded";
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
    }


    @RequestMapping(value = "/deleteDrone/{id}", method = RequestMethod.DELETE)
    @Transactional
    public void deleteProduct(@PathVariable Long id) {

        droneService.delete(id);

    }

}
