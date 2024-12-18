package com.uom.curriculum_manager.module.learningOutcome.learningOutcomeAndPogramOutcomeMap;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.uom.curriculum_manager.module.learningOutcome.LearningOutcome;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LearningOutcomeAndProgramOutcomeMap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;
    @Column
    private int programOutcomeId;


    @ManyToOne
    @JoinColumn(name = "learning_outcome_id")
    @JsonBackReference
    private LearningOutcome learningOutcome;
    @Column
    @Enumerated(EnumType.STRING)
    private MapValue mapValue;
}
