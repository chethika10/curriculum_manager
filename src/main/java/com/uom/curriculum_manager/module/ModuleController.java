package com.uom.curriculum_manager.module;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/module")
public class ModuleController {
    private final ModuleService moduleService;

    @Autowired
    public ModuleController(ModuleService moduleService) {
        this.moduleService = moduleService;
    }

    @PostMapping("/addorupdate")
    public ResponseEntity<Module> addOrUpdate(@RequestBody Module module){
//        System.out.println(module.getLearningOutcomes().toString());
        module= moduleService.addModule(module);
        return new ResponseEntity<>(module, HttpStatus.OK);

    }

}
