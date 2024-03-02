package com.dev_drones.drones.Models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "OrderEntity")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private Drone drone;

    @ManyToOne
    Medication medication;

    private int quantity;

    private int totalWeight;
}
