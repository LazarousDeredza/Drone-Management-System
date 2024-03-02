package com.dev_drones.drones.Repository;

import com.dev_drones.drones.Models.Drone;
import com.dev_drones.drones.Models.Medication;
import com.dev_drones.drones.Models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository  extends JpaRepository<Order,Long> {

    @Query("SELECT c FROM Order c WHERE c.drone = ?1")

    List<Order> findByDrone(Drone drone);

    @Query("SELECT c FROM Order c WHERE c.drone = ?1 AND c.medication=?2")

    Order findOneByDrone(Drone drone, Medication medication);

}
