package com.uom.curriculum_manager.programOutcome;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/po")
@RequiredArgsConstructor
public class ProgramOutcomeController {
    private final ProgramOutcomeService programOutcomeService;

    @PostMapping("/addoredit")
    public ResponseEntity<ProgramOutcome> addOrEdit(@RequestBody ProgramOutcome programOutcome){
        programOutcome=programOutcomeService.addOrEditPO(programOutcome);
        return new ResponseEntity<ProgramOutcome>(programOutcome, HttpStatus.OK);
    }
    @GetMapping("/delete/{id}")
    public ResponseEntity<ProgramOutcome> deletePO(@PathVariable ("id") int id){
        ProgramOutcome po= programOutcomeService.deletePO(id);
        return new ResponseEntity<>(po,HttpStatus.OK);
    }
}
