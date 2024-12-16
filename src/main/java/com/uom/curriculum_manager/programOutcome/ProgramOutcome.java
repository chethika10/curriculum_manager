package com.uom.curriculum_manager.programOutcome;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProgramOutcome {

    @Id
    @Column
    private int id;
    @Column(length = 65534)
    private String programOutcome;


}
