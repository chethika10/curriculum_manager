package com.uom.curriculum_manager.module;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @PostMapping("/edit")
    public ResponseEntity<Module> editModule(@RequestBody Module module){
        module= moduleService.editModule(module);
        return new ResponseEntity<>(module,HttpStatus.OK);
    }
    @PostMapping("/duplicate")
    public ResponseEntity<Module> duplicateModule(@RequestBody Module module){
        module= moduleService.duplicateModule(module);
        return new ResponseEntity<>(module,HttpStatus.OK);
    }
    @GetMapping("/getall")
    public ResponseEntity<List<Object>> getAll(){
        List<Object> modules=moduleService.getAll();
        return new ResponseEntity<>(modules,HttpStatus.OK);
    }
    @GetMapping("/getbycode/{code}")
    public ResponseEntity<Module> getByCode(@PathVariable("code") String code){
        Module module=moduleService.getModuleByCode(code);
        return new ResponseEntity<>(module,HttpStatus.OK);
    }

}
