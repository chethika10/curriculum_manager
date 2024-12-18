package com.uom.curriculum_manager.programOutcome;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProgramOutcomeService {

    private final ProgramOutcomeRepo programOutcomeRepo;

    public ProgramOutcome addOrEditPO(ProgramOutcome po){
        po=programOutcomeRepo.save(po);
        return po;
    }
    public ProgramOutcome deletePO(int id){
        ProgramOutcome programOutcome=programOutcomeRepo.findById(id).orElse(null);
        programOutcomeRepo.deleteById(id);
        return programOutcome;
    }

    public List<ProgramOutcome> getAll() {
        return programOutcomeRepo.findAll();
    }
}
