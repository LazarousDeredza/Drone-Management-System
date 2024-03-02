package com.dev_drones.drones.Service;

import com.dev_drones.drones.Models.Drone;
import com.dev_drones.drones.Models.Medication;

import java.util.List;


public interface MedicineService {
	
	public List<Medication> findAll();
	
	public Medication findById(long Id);
	
	public void save(Medication medication);
	
	public void delete(long Id);

	void saveMedication(Medication medication);

	Medication updateMedication(Medication medication, Long id);
}
