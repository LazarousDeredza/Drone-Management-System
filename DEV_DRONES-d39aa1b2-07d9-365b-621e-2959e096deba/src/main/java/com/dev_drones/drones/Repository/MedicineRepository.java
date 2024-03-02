package com.dev_drones.drones.Repository;

import com.dev_drones.drones.Models.Medication;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MedicineRepository extends JpaRepository<Medication, Long> {

    Medication findByName(String name);

}
