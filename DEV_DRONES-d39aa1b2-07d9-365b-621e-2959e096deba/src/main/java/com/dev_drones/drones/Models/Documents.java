

package com.dev_drones.drones.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Documents {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(
            name = "id"
    )
    private Long id;
    @Column(
            name = "file_name"
    )
    private String fileName;
    @Column(
            name = "file_path"
    )
    private String filePath;
    @Column(
            name = "file_type"
    )
    private String fileType;
    @Column(
            name = "file_size"
    )
    private String fileSize;


    public Documents(String fileName, String filePath, String fileType, String fileSize) {
        this.fileName = fileName;
        this.filePath = filePath;
        this.fileType = fileType;
        this.fileSize = fileSize;
    }
}
