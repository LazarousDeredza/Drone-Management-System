package com.dev_drones.drones.Repository;

import com.dev_drones.drones.Models.Drone;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DroneRepository extends JpaRepository<Drone, Long> {

    Drone findByName(String name);

}
