package com.uom.curriculum_manager.module;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModuleService {

    private final ModuleRepo moduleRepo;

    @Autowired
    public ModuleService(ModuleRepo moduleRepo) {
        this.moduleRepo = moduleRepo;
    }

}
