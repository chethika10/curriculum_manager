package com.uom.curriculum_manager.module.learningOutcome.learningOutcomeAndPogramOutcomeMap;

import com.uom.curriculum_manager.module.learningOutcome.LearningOutcome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LearningOutcomeAndProgramOutcomeMapRepo extends JpaRepository<LearningOutcomeAndProgramOutcomeMap,Long> {

    public List<LearningOutcomeAndProgramOutcomeMap> findAllByProgramOutcomeIdAndLearningOutcome(int pOId, LearningOutcome learningOutcome);
}
