package com.uom.curriculum_manager.module;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class module {

    @Id
    @Column
    private String code;

    @Column()
    private String title;

    @Column
    private Boolean gpa;

    @Column
    private int lectureHours;

    @Column
    private int labHours;

    @Column
    private int credits;

    @Column
    private int evaluationCa;

    @Lob
    @Column(length = 65534)
    private String objectives;




}
