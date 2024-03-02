package com.dev_drones.drones.Service.Impl;

import com.dev_drones.drones.Models.Drone;
import com.dev_drones.drones.Models.Medication;
import com.dev_drones.drones.Repository.DroneRepository;
import com.dev_drones.drones.Repository.MedicineRepository;
import com.dev_drones.drones.Service.DroneService;
import com.dev_drones.drones.Service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class MedicineServiceImpl implements MedicineService {

    @Autowired
    private MedicineRepository medicineRepository;

    @Override
    public List<Medication> findAll() {
        return medicineRepository.findAll();
    }

    @Override
    public void save(Medication medication) {
        medicineRepository.save(medication);
    }

    @Override
    public Medication findById(long id) {
        return medicineRepository.findById(id).orElseThrow(()-> new IllegalStateException("Medicine not found"));
    }

    @Override
    public void delete(long Id) {
        medicineRepository.deleteById(Id);
    }

    @Override
    public void saveMedication(Medication medication) {
        medicineRepository.save(medication);
    }

    @Transactional
    @Override
    public Medication updateMedication(Medication medication, Long id) {

        Medication medicationFromDB = medicineRepository.findById(id).orElseThrow(()-> new IllegalStateException("Medicine not found"));

        medicationFromDB.setName(medication.getName());

        medicationFromDB.setDescription(medication.getDescription());

        return medicationFromDB;

    }

}
