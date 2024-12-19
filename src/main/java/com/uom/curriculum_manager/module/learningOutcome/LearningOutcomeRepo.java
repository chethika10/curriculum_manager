package com.uom.curriculum_manager.module.learningOutcome;

import com.uom.curriculum_manager.module.Module;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LearningOutcomeRepo extends CrudRepository<LearningOutcome,Integer> {


    List<LearningOutcome> findAllByModule_Code(String code);

    @Query(value = "SELECT module_code from learning_outcome where id=?1",nativeQuery = true)
    public  String findModuleCodeById(int id);
}
