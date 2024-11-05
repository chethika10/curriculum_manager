package com.uom.curriculum_manager.module;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.uom.curriculum_manager.module.learningOutcome.LearningOutcome;
import com.uom.curriculum_manager.module.syllabusOutline.SyllabusOutline;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Module {

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

    @OneToMany(mappedBy = "module",orphanRemoval = true)
    @JsonManagedReference
    private List<LearningOutcome> learningOutcomes;

    @OneToMany(mappedBy = "module",orphanRemoval = true)
    @JsonManagedReference
    private  List<SyllabusOutline> syllabusOutlines;

}
