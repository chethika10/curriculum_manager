package com.uom.curriculum_manager.module;

import com.uom.curriculum_manager.module.learningOutcome.LearningOutcome;
import com.uom.curriculum_manager.module.learningOutcome.LearningOutcomeRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ModuleService {

    private final ModuleRepo moduleRepo;
    private final LearningOutcomeRepo learningOutcomeRepo;

//    @Autowired
//    public ModuleService(ModuleRepo moduleRepo) {
//        this.moduleRepo = moduleRepo;
//    }

    public Module addModule(Module module){
        List<LearningOutcome> learningOutcomes=module.getLearningOutcomes();
        module=moduleRepo.save(module);
        for (LearningOutcome l:learningOutcomes) {
            l.setModule(module);
            learningOutcomeRepo.save(l);
        }
        return moduleRepo.getModuleByCode(module.getCode());
    }
}
