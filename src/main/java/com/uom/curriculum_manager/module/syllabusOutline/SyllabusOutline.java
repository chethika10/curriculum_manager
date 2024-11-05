package com.uom.curriculum_manager.module.syllabusOutline;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.uom.curriculum_manager.module.Module;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SyllabusOutline {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Lob
    @Column(length = 65534)
    private String syllabusOutline;

    @Lob
    @Column(length = 65534)
    private String description;


    @Column
    private int hours;

    @ManyToOne
    @JoinColumn(name = "module_code")
    @JsonBackReference
    private Module module;

}
