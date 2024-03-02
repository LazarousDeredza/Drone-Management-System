package com.dev_drones.drones.Service.Impl;

import com.dev_drones.drones.Models.Drone;
import com.dev_drones.drones.Models.Medication;
import com.dev_drones.drones.Models.Order;
import com.dev_drones.drones.Models.State;
import com.dev_drones.drones.Repository.DroneRepository;
import com.dev_drones.drones.Repository.MedicineRepository;
import com.dev_drones.drones.Repository.OrderRepository;
import com.dev_drones.drones.Service.DroneService;
import com.dev_drones.drones.Service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
public class DroneServiceImpl implements DroneService {

    @Autowired
    private DroneRepository droneRepository;

    @Autowired
    MedicineRepository medicineRepository;

    @Autowired
    OrderRepository orderRepository;


    @Override
    public List<Drone> findAll() {
        return droneRepository.findAll();
    }

    @Override
    public void save(Drone drone) {
        droneRepository.save(drone);
    }

    @Override
    public Drone findById(long id) {
        return droneRepository.findById(id).get();
    }

    @Override
    public void delete(long Id) {
        droneRepository.deleteById(Id);
    }

    @Override
    public void saveDrone(Drone drone) {
        droneRepository.save(drone);
    }

    @Transactional
    @Override
    public Drone updateDrone(Drone drone, Long id) {

        Drone droneFromDB = droneRepository.findById(id).get();

        droneFromDB.setName(drone.getName());

        droneFromDB.setDescription(drone.getDescription());
        droneFromDB.setState(drone.getState());
        droneFromDB.setBatterCapacity(drone.getBatterCapacity());


        return droneFromDB;

    }

    @Transactional
    @Override
    public void updateDrone2(Drone drone, Long id, boolean isNewImage) {

        Drone droneFromDB = droneRepository.findById(id).get();

        droneFromDB.setName(drone.getName());
        if (isNewImage) {
            droneFromDB.setImage(drone.getImage());
        }
        droneFromDB.setSerialNumber(drone.getSerialNumber());
        droneFromDB.setModel(drone.getModel());
        droneFromDB.setWeightLimit(drone.getWeightLimit());
        droneFromDB.setDescription(drone.getDescription());
        droneFromDB.setState(drone.getState());
        droneFromDB.setBatterCapacity(drone.getBatterCapacity());


    }

    @Override
    @Transactional
    public void finishPackaging(Long id) {
        Drone drone = droneRepository.findById(id).orElseThrow(() -> {
            return new IllegalStateException("Drone Not Found");
        });

        List<Order> orders = orderRepository.findByDrone(drone);

        List<Medication> medications = new ArrayList<>();

        for (Order order : orders) {

            medications.add(order.getMedication());


        }


        drone.setMedicationsCarried(medications);
        drone.setState(State.DELIVERING);


        orderRepository.deleteAll(orders);


    }

}
