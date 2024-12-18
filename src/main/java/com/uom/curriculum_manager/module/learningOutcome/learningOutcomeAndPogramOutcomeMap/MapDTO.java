package com.uom.curriculum_manager.module.learningOutcome.learningOutcomeAndPogramOutcomeMap;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class MapDTO {
    private long id;
    private int programOutcomeId;
    private MapValue mapValue;
    private int learningOutcomeId;
}
