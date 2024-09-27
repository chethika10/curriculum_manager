package com.uom.curriculum_manager.module;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModuleRepo extends CrudRepository<Module,String> {


}
