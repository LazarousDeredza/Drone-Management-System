package com.dev_drones.drones.Config;



import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class PageNavigations {

    @RequestMapping(value = {"/home","","/","/index"})
    public String home() {

        return "index";
    }
    @RequestMapping("/new-drone")
    public String newdrone() {
        return "new_drone";
    }

    @RequestMapping("/new-medicine")
    public String newmedicine() {
        return "new_medicine";
    }

    @RequestMapping("/load_drone")
    public String loadDrone() {
        return "load_drone";
    }

    @RequestMapping("/edit_drone")
    public String editDrone() {
        return "edit_drone";
    }


    @RequestMapping("/view_drone")
    public String viewDrone() {
        return "view_drone";
    }












}
