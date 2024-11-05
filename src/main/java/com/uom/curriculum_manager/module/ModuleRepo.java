package com.uom.curriculum_manager.module;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModuleRepo extends CrudRepository<Module,String> {

    public Module getModuleByCode(String code);


    @Query(value = "select m.code,m.title from module m",nativeQuery = true)
    public List<Object> getAllModules();
}
