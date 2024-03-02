package com.dev_drones.drones.Service.Impl;

import com.dev_drones.drones.Models.Drone;
import com.dev_drones.drones.Models.Medication;
import com.dev_drones.drones.Models.Order;
import com.dev_drones.drones.Repository.DroneRepository;
import com.dev_drones.drones.Repository.MedicineRepository;
import com.dev_drones.drones.Repository.OrderRepository;
import com.dev_drones.drones.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class OrderServiceImpl implements OrderService {


    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    DroneRepository droneRepository;

    @Autowired
    MedicineRepository medicineRepository;

    @Override
    public void saveOrder(Order order) {
        //check if medicine is already in Order and update quantity
        List<Order> orders = orderRepository.findByDrone(order.getDrone());

        for (Order c : orders) {
            if (Objects.equals(c.getMedication().getId(), order.getMedication().getId())) {
                c.setQuantity(c.getQuantity() + order.getQuantity());
                c.setTotalWeight(c.getQuantity() * c.getMedication().getWeight());
                orderRepository.save(c);
                return;
            }
        }

        orderRepository.save(order);

    }

    @Override
    public String getTotals(Long droneID) {

        Drone drone = droneRepository.findById(droneID).orElseThrow(() -> {
            return new IllegalStateException("Drone not fount");
        });

        List<Order> orders = orderRepository.findByDrone(drone);


        int totalMedicines = orders.size();
        int totalItems = 0;
        int totalWeight = 0;

        for (Order order : orders) {
            totalItems += order.getQuantity();
            totalWeight += order.getTotalWeight();
        }


        return totalMedicines + "/" + totalItems + "/" + totalWeight;
    }

    @Override
    public List<Order> getAllForDrone(Drone drone) {

        return orderRepository.findByDrone(drone);
    }

    @Override
    public void updateQuantity(Long orderID, String action) {
        Order order = orderRepository.findById(orderID).orElseThrow(() -> {
            return new IllegalStateException("Order not found");
        });

        if (action.equals("+")) {
            order.setQuantity(order.getQuantity() + 1);
            order.setTotalWeight(order.getQuantity() * order.getMedication().getWeight());
        } else if (action.equals("-"))  {
            if (order.getQuantity() > 1) {
                order.setQuantity(order.getQuantity() - 1);
                order.setTotalWeight(order.getQuantity() * order.getMedication().getWeight());
            }
        }

        orderRepository.save(order);
    }

    @Override
    public void deleteMedicine(Long id, Long medicineID) {
        Drone drone=droneRepository.findById(id).orElseThrow(()->{
            return new IllegalStateException("Drone not found");
        });

        Medication medication = medicineRepository.findById(medicineID).orElseThrow(() -> {
            return new IllegalStateException("Medicine not found");
        });

        Order order = orderRepository.findOneByDrone(drone,medication);



        if (Objects.equals(order.getMedication().getId(), medication.getId())) {
            orderRepository.deleteById(order.getId());
        }
    }
}
