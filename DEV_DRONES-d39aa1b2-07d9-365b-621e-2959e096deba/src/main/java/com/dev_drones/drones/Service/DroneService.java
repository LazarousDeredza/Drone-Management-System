package com.dev_drones.drones.Service;

import com.dev_drones.drones.Models.Drone;

import java.util.List;


public interface DroneService {
	
	public List<Drone> findAll();
	
	public Drone findById(long Id);
	
	public void save(Drone drone);
	
	public void delete(long Id);

	void saveDrone(Drone drone);

	Drone updateDrone(Drone drone, Long id);

	void updateDrone2(Drone drone, Long id, boolean isNewImage);

	void finishPackaging(Long id);
}
