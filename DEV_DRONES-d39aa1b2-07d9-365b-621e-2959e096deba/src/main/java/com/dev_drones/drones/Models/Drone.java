package com.dev_drones.drones.Models;

import lombok.Data;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;

@Entity
@Data
public class Drone implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String serialNumber;
    private String name;
    private String description;
    private Model model;
    private State state;
    private  int weightLimit;
    private int batterCapacity;

    private String image;

    @ManyToMany
    List<Medication> medicationsCarried;


}
