package com.uom.curriculum_manager.module.learningOutcome.learningOutcomeAndPogramOutcomeMap;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearningOutcomeAndProgramOutcomeMapRepo extends JpaRepository<LearningOutcomeAndProgramOutcomeMap,Long> {
    
}
