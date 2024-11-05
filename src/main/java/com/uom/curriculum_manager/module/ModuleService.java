package com.uom.curriculum_manager.module;

import com.uom.curriculum_manager.module.learningOutcome.LearningOutcome;
import com.uom.curriculum_manager.module.learningOutcome.LearningOutcomeRepo;
import com.uom.curriculum_manager.module.syllabusOutline.SyllabusOutline;
import com.uom.curriculum_manager.module.syllabusOutline.SyllabusOutlineRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ModuleService {

    private final ModuleRepo moduleRepo;
    private final LearningOutcomeRepo learningOutcomeRepo;
    private final SyllabusOutlineRepo syllabusOutlineRepo;

//    @Autowired
//    public ModuleService(ModuleRepo moduleRepo) {
//        this.moduleRepo = moduleRepo;
//    }

    public Module addModule(Module module){
        List<LearningOutcome> learningOutcomes=module.getLearningOutcomes();
        List<SyllabusOutline> syllabusOutlines=module.getSyllabusOutlines();
        module=moduleRepo.save(module);
        for (LearningOutcome l:learningOutcomes) {
            l.setModule(module);
            learningOutcomeRepo.save(l);
        }
        for (SyllabusOutline s:syllabusOutlines) {
            s.setModule(module);
            syllabusOutlineRepo.save(s);
        }
        return moduleRepo.getModuleByCode(module.getCode());
    }

    public List<Object> getAll() {
        return moduleRepo.getAllModules();
    }

    public Module getModuleByCode(String code) {
        return moduleRepo.getModuleByCode(code);
    }
}
