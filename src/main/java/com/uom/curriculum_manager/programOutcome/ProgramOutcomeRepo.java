package com.uom.curriculum_manager.programOutcome;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProgramOutcomeRepo extends JpaRepository<ProgramOutcome,Integer> {

}
