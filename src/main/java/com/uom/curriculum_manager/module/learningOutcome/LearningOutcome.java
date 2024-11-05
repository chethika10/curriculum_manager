package com.uom.curriculum_manager.module.learningOutcome;

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
public class LearningOutcome {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Lob
    @Column(length = 65534)
    private String learningOutcome;

    @Column
    private int labAssessments;

    @Column
    private int otherAssessments;

    @ManyToOne
    @JoinColumn(name = "module_code")
    @JsonBackReference
    private Module module;

}
