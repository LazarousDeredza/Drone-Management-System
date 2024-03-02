package com.dev_drones.drones.Controller;

import java.util.List;

import javax.transaction.Transactional;

import com.dev_drones.drones.Models.Drone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.dev_drones.drones.Service.DroneService;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class DroneController {

    @Autowired
    private DroneService droneService;

    private List<Drone> getAllDrones() {
        return droneService.findAll();
    }

    @RequestMapping("/drones")
    public String products() {
        return "drones";
    }

    @RequestMapping("/editProduct")
    public String editProducts( ) {
        return "edit_drone";
    }


    @RequestMapping(value = "/addProduct", method = RequestMethod.GET)
    public String addProduct(Model model) {
        model.addAttribute("product", new Drone());
        return "addProduct";
    }

    @RequestMapping(value = "/addProduct", method = RequestMethod.POST)
    @Transactional
    public String addProduct(@ModelAttribute Drone drone, Model model) {
        if (drone != null) {
            droneService.save(drone);
        }
        model.addAttribute("products", getAllDrones());
        return "redirect:/";
    }



    @RequestMapping(value = "/delete-product/{id}")
    public String delete(@PathVariable(value = "id") Long id) {
        if (id > 0) {
            Drone drone = droneService.findById(id);
            droneService.delete(id);
        }
        return "redirect:/products";
    }

    @RequestMapping(value = "/productview/{id}")
    public String view(@PathVariable(value = "id") Long id, Model model) {
        Drone drone = droneService.findById(id);
        model.addAttribute("product", drone);
        return "productview";
    }
}
