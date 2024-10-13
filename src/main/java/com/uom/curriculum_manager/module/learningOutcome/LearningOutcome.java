package com.uom.curriculum_manager.module.learningOutcome;

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

    @ManyToOne
    @JoinColumn(name = "module_code")
    private Module module;

}
