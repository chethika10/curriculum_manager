package com.uom.curriculum_manager.module.syllabusOutline;

import com.uom.curriculum_manager.module.Module;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SyllabusOutlineRepo extends CrudRepository<SyllabusOutline,Integer> {

    List<SyllabusOutline> findAllByModule_Code(String code);
}
