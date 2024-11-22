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

    public Module editModule(Module module) {
        Module module1=moduleRepo.save(module);
        //delete existing los
        List<LearningOutcome> learningOutcomes=learningOutcomeRepo.findAllByModule_Code(module.getCode());
        learningOutcomeRepo.deleteAll(learningOutcomes);
        learningOutcomes=module.getLearningOutcomes();

        //delete existing SOs
        List<SyllabusOutline> syllabusOutlines=syllabusOutlineRepo.findAllByModule_Code(module.getCode());
        syllabusOutlineRepo.deleteAll(syllabusOutlines);
        syllabusOutlines=module.getSyllabusOutlines();


        for (LearningOutcome l:learningOutcomes) {
            l.setModule(module1);
//            l.setId(0);
            learningOutcomeRepo.save(l);
        }
        for (SyllabusOutline s:syllabusOutlines) {
            s.setModule(module1);
//            s.setId(0);
            syllabusOutlineRepo.save(s);
        }

        return moduleRepo.getModuleByCode(module1.getCode());
    }
}
