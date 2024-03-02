package com.dev_drones.drones.Controller;

import com.dev_drones.drones.Models.Drone;
import com.dev_drones.drones.Models.Medication;
import com.dev_drones.drones.Models.Order;
import com.dev_drones.drones.Service.DroneService;
import com.dev_drones.drones.Service.MedicineService;
import com.dev_drones.drones.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderRestController {
    @Autowired
    private DroneService droneService;
    @Autowired
    private MedicineService medicineService;

    @Autowired
    OrderService orderService;


    ///order/getMedications/{droneID}
    @RequestMapping(value = "/orders/getAll/{droneID}", method = RequestMethod.GET)
    public List<Order> getMedications(@PathVariable Long droneID) {
        Drone drone = droneService.findById(droneID);

        return orderService.getAllForDrone(drone);
    }





    @RequestMapping(value = "/addOrder/{droneID}/{medicineID}" ,method = RequestMethod.POST)
    public void placeOrder(@PathVariable Long droneID, @PathVariable Long medicineID) {

        Drone drone=droneService.findById(droneID);
        Medication medication =medicineService.findById(medicineID);

        Order order=new Order();
        order.setDrone(drone);
        order.setMedication(medication);
        order.setQuantity(1);
        order.setTotalWeight(medication.getWeight());

         orderService.saveOrder(order);

    }

    @RequestMapping (value = "/getMedicineTotals/{droneID}")
    private String getTotals(@PathVariable Long droneID){

        return orderService.getTotals(droneID);

    }

    //order/updateQuantity/

    @RequestMapping(value = "/order/updateQuantity/{orderID}/{action}" ,method = RequestMethod.PUT)
    public void modifyQuantity( @PathVariable Long orderID,@PathVariable String action) {
        orderService.updateQuantity(orderID,action);
    }

    @RequestMapping(value = "/order/deleteMedicine/{droneID}/{medicineID}" ,method = RequestMethod.DELETE)
    public void deleteMedicine(@PathVariable Long droneID,@PathVariable Long medicineID) {
        orderService.deleteMedicine(droneID,medicineID);

    }

}
