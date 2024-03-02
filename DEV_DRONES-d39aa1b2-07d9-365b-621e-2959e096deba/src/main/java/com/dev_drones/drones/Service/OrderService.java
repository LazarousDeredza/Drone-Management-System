package com.dev_drones.drones.Service;

import com.dev_drones.drones.Models.Drone;
import com.dev_drones.drones.Models.Medication;
import com.dev_drones.drones.Models.Order;

import java.util.List;

public interface OrderService {
    void saveOrder(Order order);

    String getTotals(Long droneID);



    List<Order> getAllForDrone(Drone drone);

    void updateQuantity(Long orderID, String action);

    void deleteMedicine(Long droneID, Long medicineID);
}
